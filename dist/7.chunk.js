webpackJsonp([7],{

/***/ "../../../../../src/app/layout/city-edit/city-edit-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__city_edit_component__ = __webpack_require__("../../../../../src/app/layout/city-edit/city-edit.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityEditRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__city_edit_component__["a" /* CityEditComponent */] }
];
var CityEditRoutingModule = (function () {
    function CityEditRoutingModule() {
    }
    return CityEditRoutingModule;
}());
CityEditRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], CityEditRoutingModule);

//# sourceMappingURL=city-edit-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/city-edit/city-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Forms'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n\n            <form role=\"form\">\n                <fieldset class=\"form-group\">\n                    <label>English Name</label>\n                    <input class=\"form-control\">\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Other Name</label>\n                    <input class=\"form-control\" placeholder=\"Enter text\">\n                </fieldset>\n                <button type=\"button\" class=\"btn btn-secondary\"  (click)=\"updateCity()\">Submit Button</button>\n                <button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\n\n            </form>\n\n        </div>\n        \n    </div>\n    <!-- /.row -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/city-edit/city-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/city-edit/city-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CityEditComponent = (function () {
    function CityEditComponent() {
    }
    CityEditComponent.prototype.updateCity = function () {
        alert("aa");
    };
    CityEditComponent.prototype.ngOnInit = function () { };
    return CityEditComponent;
}());
CityEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'app-city-edit',
        template: __webpack_require__("../../../../../src/app/layout/city-edit/city-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/city-edit/city-edit.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [])
], CityEditComponent);

//# sourceMappingURL=city-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/city-edit/city-edit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__city_edit_routing_module__ = __webpack_require__("../../../../../src/app/layout/city-edit/city-edit-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__city_edit_component__ = __webpack_require__("../../../../../src/app/layout/city-edit/city-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityEditModule", function() { return CityEditModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CityEditModule = (function () {
    function CityEditModule() {
    }
    return CityEditModule;
}());
CityEditModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__city_edit_routing_module__["a" /* CityEditRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__city_edit_component__["a" /* CityEditComponent */]]
    })
], CityEditModule);

//# sourceMappingURL=city-edit.module.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map