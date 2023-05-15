"use strict";
(() => {
var exports = {};
exports.id = 898;
exports.ids = [898];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 4845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/products/[id]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "DELETE": () => (DELETE),
  "GET": () => (GET),
  "PATCH": () => (PATCH)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(6145);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9532);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(3804);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(3524);
;// CONCATENATED MODULE: ./app/api/products/[id]/route.js


const prisma = new client_.PrismaClient();
// > Method untuk get detail data
const GET = async (request, { params  })=>{
    // > parse id from string -> int
    const parseIdToInt = parseInt(params.id);
    // console.info(parseIdToInt, '=> id yang masuk');
    const product = await prisma.product.findFirst({
        where: {
            id: parseIdToInt
        },
        include: {
            Brand: true
        }
    });
    return next_response/* default.json */.Z.json(product, {
        status: 200
    });
};
// > Method untuk update data product
const PATCH = async (request, { params  })=>{
    // > ambil body data yang dikirimkan
    const body = await request.json();
    // > parse id from string -> int
    const parseIdToInt = parseInt(params.id);
    // console.info(parseIdToInt, '=> id yang masuk');
    const product = await prisma.product.update({
        where: {
            id: parseIdToInt
        },
        data: {
            title: body.title,
            price: body.price,
            category: body.category,
            brandId: body.brandId
        }
    });
    // console.info(parseIdToInt, '=> id bro');
    // console.info(product, '=> data bro');
    return next_response/* default.json */.Z.json(product, {
        status: 200
    });
};
// > Method untuk delete product
const DELETE = async (request, { params  })=>{
    // > parse id from string -> int
    const parseIdToInt = parseInt(params.id);
    // console.info(parseIdToInt, '=> id yang masuk');
    // > delete product
    const product = await prisma.product.delete({
        where: {
            id: parseIdToInt
        }
    });
    return next_response/* default.json */.Z.json(product, {
        status: 200
    });
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fproducts%2F%5Bid%5D%2Froute.js&appDir=%2FUsers%2Fmg%2FAdrian%2FCoding%2FBelajar-NextJS%2Ffullstack-nextjs%2Fapp&appPaths=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/products/[id]",
    resolvedPagePath: "/Users/mg/Adrian/Coding/Belajar-NextJS/fullstack-nextjs/app/api/products/[id]/route.js",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/products/[id]/route"

    

/***/ }),

/***/ 3804:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file is for modularized imports for next/server to get fully-treeshaking.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _response.NextResponse;
    }
}));
const _response = __webpack_require__(6843); //# sourceMappingURL=next-response.js.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859,616], () => (__webpack_exec__(4845)));
module.exports = __webpack_exports__;

})();