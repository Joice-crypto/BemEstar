"use strict";
(() => {
var exports = {};
exports.id = 292;
exports.ids = [292];
exports.modules = {

/***/ 9491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 6224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 6077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/auth/callback/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(3078);
;// CONCATENATED MODULE: ./src/lib/api.ts

const api = axios/* default */.Z.create({
    baseURL: "http://localhost:8080"
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
;// CONCATENATED MODULE: ./src/app/api/auth/callback/route.ts


async function GET(request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const redirectTo = request.cookies.get("redirectTo")?.value;
    const registerResponse = await api.post("/register", {
        code
    });
    const { token } = registerResponse.data;
    const redirectURL = redirectTo ?? new URL("/inicio", request.url);
    const cookiesExpiresInSecons = 60 * 60 * 24 * 30 // 30 dias
    ;
    return next_response/* default */.Z.redirect(redirectURL, {
        headers: {
            "Set-cookie": `token=${token}; Path=/; max-age=${cookiesExpiresInSecons}`
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2Fcallback%2Froute&name=app%2Fapi%2Fauth%2Fcallback%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fcallback%2Froute.ts&appDir=%2Fhome%2Fjoice%2F%C3%81rea%20de%20Trabalho%2FIC%2FBemEstar%2Fweb%2Fnextjs-blog%2Fsrc%2Fapp&appPaths=%2Fapi%2Fauth%2Fcallback%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/auth/callback/route",
        pathname: "/api/auth/callback",
        filename: "route",
        bundlePath: "app/api/auth/callback/route"
    },
    resolvedPagePath: "/home/joice/Área de Trabalho/IC/BemEstar/web/nextjs-blog/src/app/api/auth/callback/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/auth/callback/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [916,778,760], () => (__webpack_exec__(6077)));
module.exports = __webpack_exports__;

})();