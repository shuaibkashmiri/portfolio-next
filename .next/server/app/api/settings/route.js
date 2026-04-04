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
exports.id = "app/api/settings/route";
exports.ids = ["app/api/settings/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

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

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsettings%2Froute&page=%2Fapi%2Fsettings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsettings%2Froute.js&appDir=E%3A%5CPersonal%5Cport%5Cportfolio-next%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CPersonal%5Cport%5Cportfolio-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsettings%2Froute&page=%2Fapi%2Fsettings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsettings%2Froute.js&appDir=E%3A%5CPersonal%5Cport%5Cportfolio-next%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CPersonal%5Cport%5Cportfolio-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Personal_port_portfolio_next_src_app_api_settings_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/settings/route.js */ \"(rsc)/./src/app/api/settings/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/settings/route\",\n        pathname: \"/api/settings\",\n        filename: \"route\",\n        bundlePath: \"app/api/settings/route\"\n    },\n    resolvedPagePath: \"E:\\\\Personal\\\\port\\\\portfolio-next\\\\src\\\\app\\\\api\\\\settings\\\\route.js\",\n    nextConfigOutput,\n    userland: E_Personal_port_portfolio_next_src_app_api_settings_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/settings/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZXR0aW5ncyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc2V0dGluZ3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzZXR0aW5ncyUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDUGVyc29uYWwlNUNwb3J0JTVDcG9ydGZvbGlvLW5leHQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNQZXJzb25hbCU1Q3BvcnQlNUNwb3J0Zm9saW8tbmV4dCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDcUI7QUFDbEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1wb3J0Zm9saW8vPzFiMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRTpcXFxcUGVyc29uYWxcXFxccG9ydFxcXFxwb3J0Zm9saW8tbmV4dFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxzZXR0aW5nc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2V0dGluZ3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zZXR0aW5nc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2V0dGluZ3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFxQZXJzb25hbFxcXFxwb3J0XFxcXHBvcnRmb2xpby1uZXh0XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHNldHRpbmdzXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zZXR0aW5ncy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsettings%2Froute&page=%2Fapi%2Fsettings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsettings%2Froute.js&appDir=E%3A%5CPersonal%5Cport%5Cportfolio-next%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CPersonal%5Cport%5Cportfolio-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/settings/route.js":
/*!***************************************!*\
  !*** ./src/app/api/settings/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT),\n/* harmony export */   dynamic: () => (/* binding */ dynamic),\n/* harmony export */   revalidate: () => (/* binding */ revalidate)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.js\");\n/* harmony import */ var _models_SiteSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/SiteSettings */ \"(rsc)/./src/models/SiteSettings.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// Disable caching for this route\nconst dynamic = \"force-dynamic\";\nconst revalidate = 0;\nasync function GET() {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        let settings = await _models_SiteSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne();\n        if (!settings) {\n            // Create default settings if none exist\n            settings = await _models_SiteSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n                aboutText: \"Default about text\",\n                heroTitle: \"Full Stack Developer\",\n                heroSubtitle: \"Building amazing web applications\",\n                profileImage: \"/default-profile.jpg\",\n                aboutImage: \"/default-about.jpg\",\n                contactEmail: \"contact@example.com\",\n                contactPhone: \"+1234567890\",\n                location: \"Location\"\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(settings, {\n            headers: {\n                \"Cache-Control\": \"no-store, no-cache, must-revalidate, proxy-revalidate\",\n                \"Pragma\": \"no-cache\",\n                \"Expires\": \"0\"\n            }\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)();\n        if (!session) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const data = await request.json();\n        let settings = await _models_SiteSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne();\n        if (!settings) {\n            settings = await _models_SiteSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(data);\n        } else {\n            settings = await _models_SiteSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(settings._id, data, {\n                new: true\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(settings);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZXR0aW5ncy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMkM7QUFDTDtBQUNXO0FBQ0o7QUFFN0MsaUNBQWlDO0FBQzFCLE1BQU1JLFVBQVUsZ0JBQWdCO0FBQ2hDLE1BQU1DLGFBQWEsRUFBRTtBQUVyQixlQUFlQztJQUNwQixJQUFJO1FBQ0YsTUFBTUwsd0RBQVNBO1FBQ2YsSUFBSU0sV0FBVyxNQUFNTCw0REFBWUEsQ0FBQ00sT0FBTztRQUV6QyxJQUFJLENBQUNELFVBQVU7WUFDYix3Q0FBd0M7WUFDeENBLFdBQVcsTUFBTUwsNERBQVlBLENBQUNPLE1BQU0sQ0FBQztnQkFDbkNDLFdBQVc7Z0JBQ1hDLFdBQVc7Z0JBQ1hDLGNBQWM7Z0JBQ2RDLGNBQWM7Z0JBQ2RDLFlBQVk7Z0JBQ1pDLGNBQWM7Z0JBQ2RDLGNBQWM7Z0JBQ2RDLFVBQVU7WUFDWjtRQUNGO1FBRUEsT0FBT2pCLHFEQUFZQSxDQUFDa0IsSUFBSSxDQUFDWCxVQUFVO1lBQ2pDWSxTQUFTO2dCQUNQLGlCQUFpQjtnQkFDakIsVUFBVTtnQkFDVixXQUFXO1lBQ2I7UUFDRjtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU9wQixxREFBWUEsQ0FBQ2tCLElBQUksQ0FBQztZQUFFRSxPQUFPQSxNQUFNQyxPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDbkU7QUFDRjtBQUVPLGVBQWVDLElBQUlDLE9BQU87SUFDL0IsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTXRCLDJEQUFnQkE7UUFDdEMsSUFBSSxDQUFDc0IsU0FBUztZQUNaLE9BQU96QixxREFBWUEsQ0FBQ2tCLElBQUksQ0FBQztnQkFBRUUsT0FBTztZQUFlLEdBQUc7Z0JBQUVFLFFBQVE7WUFBSTtRQUNwRTtRQUVBLE1BQU1yQix3REFBU0E7UUFDZixNQUFNeUIsT0FBTyxNQUFNRixRQUFRTixJQUFJO1FBRS9CLElBQUlYLFdBQVcsTUFBTUwsNERBQVlBLENBQUNNLE9BQU87UUFFekMsSUFBSSxDQUFDRCxVQUFVO1lBQ2JBLFdBQVcsTUFBTUwsNERBQVlBLENBQUNPLE1BQU0sQ0FBQ2lCO1FBQ3ZDLE9BQU87WUFDTG5CLFdBQVcsTUFBTUwsNERBQVlBLENBQUN5QixpQkFBaUIsQ0FBQ3BCLFNBQVNxQixHQUFHLEVBQUVGLE1BQU07Z0JBQUVHLEtBQUs7WUFBSztRQUNsRjtRQUVBLE9BQU83QixxREFBWUEsQ0FBQ2tCLElBQUksQ0FBQ1g7SUFDM0IsRUFBRSxPQUFPYSxPQUFPO1FBQ2QsT0FBT3BCLHFEQUFZQSxDQUFDa0IsSUFBSSxDQUFDO1lBQUVFLE9BQU9BLE1BQU1DLE9BQU87UUFBQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNuRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtcG9ydGZvbGlvLy4vc3JjL2FwcC9hcGkvc2V0dGluZ3Mvcm91dGUuanM/MjVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnQC9saWIvbW9uZ29kYic7XHJcbmltcG9ydCBTaXRlU2V0dGluZ3MgZnJvbSAnQC9tb2RlbHMvU2l0ZVNldHRpbmdzJztcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCc7XHJcblxyXG4vLyBEaXNhYmxlIGNhY2hpbmcgZm9yIHRoaXMgcm91dGVcclxuZXhwb3J0IGNvbnN0IGR5bmFtaWMgPSAnZm9yY2UtZHluYW1pYyc7XHJcbmV4cG9ydCBjb25zdCByZXZhbGlkYXRlID0gMDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgbGV0IHNldHRpbmdzID0gYXdhaXQgU2l0ZVNldHRpbmdzLmZpbmRPbmUoKTtcclxuICAgIFxyXG4gICAgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAvLyBDcmVhdGUgZGVmYXVsdCBzZXR0aW5ncyBpZiBub25lIGV4aXN0XHJcbiAgICAgIHNldHRpbmdzID0gYXdhaXQgU2l0ZVNldHRpbmdzLmNyZWF0ZSh7XHJcbiAgICAgICAgYWJvdXRUZXh0OiAnRGVmYXVsdCBhYm91dCB0ZXh0JyxcclxuICAgICAgICBoZXJvVGl0bGU6ICdGdWxsIFN0YWNrIERldmVsb3BlcicsXHJcbiAgICAgICAgaGVyb1N1YnRpdGxlOiAnQnVpbGRpbmcgYW1hemluZyB3ZWIgYXBwbGljYXRpb25zJyxcclxuICAgICAgICBwcm9maWxlSW1hZ2U6ICcvZGVmYXVsdC1wcm9maWxlLmpwZycsXHJcbiAgICAgICAgYWJvdXRJbWFnZTogJy9kZWZhdWx0LWFib3V0LmpwZycsXHJcbiAgICAgICAgY29udGFjdEVtYWlsOiAnY29udGFjdEBleGFtcGxlLmNvbScsXHJcbiAgICAgICAgY29udGFjdFBob25lOiAnKzEyMzQ1Njc4OTAnLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnTG9jYXRpb24nLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHNldHRpbmdzLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1zdG9yZSwgbm8tY2FjaGUsIG11c3QtcmV2YWxpZGF0ZSwgcHJveHktcmV2YWxpZGF0ZScsXHJcbiAgICAgICAgJ1ByYWdtYSc6ICduby1jYWNoZScsXHJcbiAgICAgICAgJ0V4cGlyZXMnOiAnMCcsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbigpO1xyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgXHJcbiAgICBsZXQgc2V0dGluZ3MgPSBhd2FpdCBTaXRlU2V0dGluZ3MuZmluZE9uZSgpO1xyXG4gICAgXHJcbiAgICBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgIHNldHRpbmdzID0gYXdhaXQgU2l0ZVNldHRpbmdzLmNyZWF0ZShkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldHRpbmdzID0gYXdhaXQgU2l0ZVNldHRpbmdzLmZpbmRCeUlkQW5kVXBkYXRlKHNldHRpbmdzLl9pZCwgZGF0YSwgeyBuZXc6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihzZXR0aW5ncyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb25uZWN0REIiLCJTaXRlU2V0dGluZ3MiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiZHluYW1pYyIsInJldmFsaWRhdGUiLCJHRVQiLCJzZXR0aW5ncyIsImZpbmRPbmUiLCJjcmVhdGUiLCJhYm91dFRleHQiLCJoZXJvVGl0bGUiLCJoZXJvU3VidGl0bGUiLCJwcm9maWxlSW1hZ2UiLCJhYm91dEltYWdlIiwiY29udGFjdEVtYWlsIiwiY29udGFjdFBob25lIiwibG9jYXRpb24iLCJqc29uIiwiaGVhZGVycyIsImVycm9yIiwibWVzc2FnZSIsInN0YXR1cyIsIlBVVCIsInJlcXVlc3QiLCJzZXNzaW9uIiwiZGF0YSIsImZpbmRCeUlkQW5kVXBkYXRlIiwiX2lkIiwibmV3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/settings/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.js":
/*!****************************!*\
  !*** ./src/lib/mongodb.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectDB() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVztBQUUzQyxJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJRyxNQUFNO0FBQ2xCO0FBRUEsSUFBSUMsU0FBU0MsT0FBT04sUUFBUTtBQUU1QixJQUFJLENBQUNLLFFBQVE7SUFDWEEsU0FBU0MsT0FBT04sUUFBUSxHQUFHO1FBQUVPLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ3pEO0FBRUEsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCO0lBRUEsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDbkIsTUFBTUUsT0FBTztZQUNYQyxnQkFBZ0I7UUFDbEI7UUFFQU4sT0FBT0csT0FBTyxHQUFHUix1REFBZ0IsQ0FBQ0MsYUFBYVMsTUFBTUcsSUFBSSxDQUFDLENBQUNiO1lBQ3pELE9BQU9BO1FBQ1Q7SUFDRjtJQUVBLElBQUk7UUFDRkssT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDcEMsRUFBRSxPQUFPTSxHQUFHO1FBQ1ZULE9BQU9HLE9BQU8sR0FBRztRQUNqQixNQUFNTTtJQUNSO0lBRUEsT0FBT1QsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtcG9ydGZvbGlvLy4vc3JjL2xpYi9tb25nb2RiLmpzPzhiMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZScpO1xyXG59XHJcblxyXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xyXG5cclxuaWYgKCFjYWNoZWQpIHtcclxuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdERCKCkge1xyXG4gIGlmIChjYWNoZWQuY29ubikge1xyXG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XHJcbiAgICAgIHJldHVybiBtb25nb29zZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjYWNoZWQuY29ubjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiY29ubmVjdERCIiwib3B0cyIsImJ1ZmZlckNvbW1hbmRzIiwiY29ubmVjdCIsInRoZW4iLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./src/models/SiteSettings.js":
/*!************************************!*\
  !*** ./src/models/SiteSettings.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SiteSettingsSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    aboutText: {\n        type: String,\n        required: true\n    },\n    fullName: {\n        type: String,\n        default: \"Shoaib Mushtaq Bhat\"\n    },\n    heroName: {\n        type: String,\n        default: \"Shoaib\"\n    },\n    heroTitle: {\n        type: String,\n        required: true\n    },\n    heroPrefixText: {\n        type: String,\n        default: \"I'm\"\n    },\n    heroSubtitle: {\n        type: String,\n        required: true\n    },\n    heroAnimatedTexts: [\n        {\n            type: String\n        }\n    ],\n    profileImage: {\n        type: String,\n        required: true\n    },\n    aboutImage: {\n        type: String,\n        required: true\n    },\n    logo: {\n        type: String,\n        default: \"/logodf.png\"\n    },\n    contactEmail: {\n        type: String,\n        required: true\n    },\n    contactPhone: {\n        type: String,\n        required: true\n    },\n    location: {\n        type: String,\n        required: true\n    },\n    githubUrl: {\n        type: String\n    },\n    linkedinUrl: {\n        type: String\n    },\n    instagramUrl: {\n        type: String\n    },\n    facebookUrl: {\n        type: String\n    },\n    yearsOfExperience: {\n        type: String,\n        default: \"3+\"\n    },\n    projectsCompleted: {\n        type: String,\n        default: \"20+\"\n    },\n    cvPath: {\n        type: String,\n        default: \"/cv_shoaib.pdf\"\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).SiteSettings || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"SiteSettings\", SiteSettingsSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1NpdGVTZXR0aW5ncy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMscUJBQXFCLElBQUlELHdEQUFlLENBQUM7SUFDN0NHLFdBQVc7UUFDVEMsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FDLFVBQVU7UUFDUkgsTUFBTUM7UUFDTkcsU0FBUztJQUNYO0lBQ0FDLFVBQVU7UUFDUkwsTUFBTUM7UUFDTkcsU0FBUztJQUNYO0lBQ0FFLFdBQVc7UUFDVE4sTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FLLGdCQUFnQjtRQUNkUCxNQUFNQztRQUNORyxTQUFTO0lBQ1g7SUFDQUksY0FBYztRQUNaUixNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQU8sbUJBQW1CO1FBQUM7WUFDbEJULE1BQU1DO1FBQ1I7S0FBRTtJQUNGUyxjQUFjO1FBQ1pWLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBUyxZQUFZO1FBQ1ZYLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBVSxNQUFNO1FBQ0paLE1BQU1DO1FBQ05HLFNBQVM7SUFDWDtJQUNBUyxjQUFjO1FBQ1piLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBWSxjQUFjO1FBQ1pkLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBYSxVQUFVO1FBQ1JmLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBYyxXQUFXO1FBQ1RoQixNQUFNQztJQUNSO0lBQ0FnQixhQUFhO1FBQ1hqQixNQUFNQztJQUNSO0lBQ0FpQixjQUFjO1FBQ1psQixNQUFNQztJQUNSO0lBQ0FrQixhQUFhO1FBQ1huQixNQUFNQztJQUNSO0lBQ0FtQixtQkFBbUI7UUFDakJwQixNQUFNQztRQUNORyxTQUFTO0lBQ1g7SUFDQWlCLG1CQUFtQjtRQUNqQnJCLE1BQU1DO1FBQ05HLFNBQVM7SUFDWDtJQUNBa0IsUUFBUTtRQUNOdEIsTUFBTUM7UUFDTkcsU0FBUztJQUNYO0FBQ0YsR0FBRztJQUNEbUIsWUFBWTtBQUNkO0FBRUEsaUVBQWUzQix3REFBZSxDQUFDNkIsWUFBWSxJQUFJN0IscURBQWMsQ0FBQyxnQkFBZ0JDLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXBvcnRmb2xpby8uL3NyYy9tb2RlbHMvU2l0ZVNldHRpbmdzLmpzP2RlNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IFNpdGVTZXR0aW5nc1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIGFib3V0VGV4dDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBmdWxsTmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogXCJTaG9haWIgTXVzaHRhcSBCaGF0XCIsXHJcbiAgfSxcclxuICBoZXJvTmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogXCJTaG9haWJcIixcclxuICB9LFxyXG4gIGhlcm9UaXRsZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBoZXJvUHJlZml4VGV4dDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogXCJJJ21cIixcclxuICB9LFxyXG4gIGhlcm9TdWJ0aXRsZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBoZXJvQW5pbWF0ZWRUZXh0czogW3tcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9XSxcclxuICBwcm9maWxlSW1hZ2U6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgYWJvdXRJbWFnZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiAnL2xvZ29kZi5wbmcnLFxyXG4gIH0sXHJcbiAgY29udGFjdEVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG4gIGNvbnRhY3RQaG9uZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBsb2NhdGlvbjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBnaXRodWJVcmw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9LFxyXG4gIGxpbmtlZGluVXJsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgfSxcclxuICBpbnN0YWdyYW1Vcmw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9LFxyXG4gIGZhY2Vib29rVXJsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgfSxcclxuICB5ZWFyc09mRXhwZXJpZW5jZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogJzMrJyxcclxuICB9LFxyXG4gIHByb2plY3RzQ29tcGxldGVkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiAnMjArJyxcclxuICB9LFxyXG4gIGN2UGF0aDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogJy9jdl9zaG9haWIucGRmJyxcclxuICB9LFxyXG59LCB7XHJcbiAgdGltZXN0YW1wczogdHJ1ZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuU2l0ZVNldHRpbmdzIHx8IG1vbmdvb3NlLm1vZGVsKCdTaXRlU2V0dGluZ3MnLCBTaXRlU2V0dGluZ3NTY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTaXRlU2V0dGluZ3NTY2hlbWEiLCJTY2hlbWEiLCJhYm91dFRleHQiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJmdWxsTmFtZSIsImRlZmF1bHQiLCJoZXJvTmFtZSIsImhlcm9UaXRsZSIsImhlcm9QcmVmaXhUZXh0IiwiaGVyb1N1YnRpdGxlIiwiaGVyb0FuaW1hdGVkVGV4dHMiLCJwcm9maWxlSW1hZ2UiLCJhYm91dEltYWdlIiwibG9nbyIsImNvbnRhY3RFbWFpbCIsImNvbnRhY3RQaG9uZSIsImxvY2F0aW9uIiwiZ2l0aHViVXJsIiwibGlua2VkaW5VcmwiLCJpbnN0YWdyYW1VcmwiLCJmYWNlYm9va1VybCIsInllYXJzT2ZFeHBlcmllbmNlIiwicHJvamVjdHNDb21wbGV0ZWQiLCJjdlBhdGgiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiU2l0ZVNldHRpbmdzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/SiteSettings.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/preact","vendor-chunks/oidc-token-hash","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsettings%2Froute&page=%2Fapi%2Fsettings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsettings%2Froute.js&appDir=E%3A%5CPersonal%5Cport%5Cportfolio-next%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CPersonal%5Cport%5Cportfolio-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();