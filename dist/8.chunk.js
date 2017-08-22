webpackJsonp([8],{

/***/ "../../../../../src/app/layout/agent/agent-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agent_component__ = __webpack_require__("../../../../../src/app/layout/agent/agent.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__agent_component__["a" /* AgentComponent */] }
];
var AgentRoutingModule = (function () {
    function AgentRoutingModule() {
    }
    return AgentRoutingModule;
}());
AgentRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AgentRoutingModule);

//# sourceMappingURL=agent-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/agent/agent.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Tables'\" [icon]=\"'fa-table'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col col-xl-6 col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Striped Rows</div>\n                <div class=\"card-block table-responsive\">\n                    <table class=\"table table-hover table-striped\">\n                        <thead>\n                        <tr>\n                            <th>Page</th>\n                            <th>Visits</th>\n                            <th>% New Visits</th>\n                            <th>Revenue</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr>\n                            <td><a [routerLink]=\"['/agentedit']\" [routerLinkActive]=\"['router-link-active']\" >/index.html</a></td>\n                            <td>1265</td>\n                            <td>32.3%</td>\n                            <td>$321.33</td>\n                        </tr>\n                        <tr>\n                            <td><a [routerLink]=\"['/agentedit']\" [routerLinkActive]=\"['router-link-active']\" >about.html</a></td>\n                            <td>261</td>\n                            <td>33.3%</td>\n                            <td>$234.12</td>\n                        </tr>\n                        <tr>\n                            <td><a [routerLink]=\"['/agentedit']\" [routerLinkActive]=\"['router-link-active']\" >sales.html</a></td>\n                            <td>665</td>\n                            <td>21.3%</td>\n                            <td>$16.34</td>\n                        </tr>\n                        <tr>\n                            <td>/blog.html</td>\n                            <td>9516</td>\n                            <td>89.3%</td>\n                            <td>$1644.43</td>\n                        </tr>\n                        <tr>\n                            <td>/404.html</td>\n                            <td>23</td>\n                            <td>34.3%</td>\n                            <td>$23.52</td>\n                        </tr>\n                        <tr>\n                            <td>/services.html</td>\n                            <td>421</td>\n                            <td>60.3%</td>\n                            <td>$724.32</td>\n                        </tr>\n                        <tr>\n                            <td>/blog/post.html</td>\n                            <td>1233</td>\n                            <td>93.2%</td>\n                            <td>$126.34</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n    \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/agent/agent.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/agent/agent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgentComponent = (function () {
    function AgentComponent() {
    }
    AgentComponent.prototype.ngOnInit = function () { };
    return AgentComponent;
}());
AgentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'app-agent',
        template: __webpack_require__("../../../../../src/app/layout/agent/agent.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/agent/agent.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [])
], AgentComponent);

//# sourceMappingURL=agent.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/agent/agent.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agent_component__ = __webpack_require__("../../../../../src/app/layout/agent/agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agent_routing_module__ = __webpack_require__("../../../../../src/app/layout/agent/agent-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentModule", function() { return AgentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AgentModule = (function () {
    function AgentModule() {
    }
    return AgentModule;
}());
AgentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__agent_routing_module__["a" /* AgentRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__agent_component__["a" /* AgentComponent */]]
    })
], AgentModule);

//# sourceMappingURL=agent.module.js.map

/***/ })

});
//# sourceMappingURL=8.chunk.js.map