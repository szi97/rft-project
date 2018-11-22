(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/schedule/schedule.component */ "./src/app/components/schedule/schedule.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/timetable/timetable.component */ "./src/app/components/timetable/timetable.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'menetrend', component: _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"] },
    { path: 'regisztracio', component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    { path: 'orarend', component: _components_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_5__["TimetableComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/schedule/schedule.component */ "./src/app/components/schedule/schedule.component.ts");
/* harmony import */ var _components_schedule_mentors_mentorspopup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/schedule/mentors/mentorspopup.component */ "./src/app/components/schedule/mentors/mentorspopup.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/timetable/timetable.component */ "./src/app/components/timetable/timetable.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_schedule_mentees_menteespopup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/schedule/mentees/menteespopup.component */ "./src/app/components/schedule/mentees/menteespopup.component.ts");
/* harmony import */ var _components_schedule_institutions_insitutionspopup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/schedule/institutions/insitutionspopup.component */ "./src/app/components/schedule/institutions/insitutionspopup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppModule = /** @class */ (function () {
    function AppModule(router) {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_8__["ScheduleComponent"],
                _components_schedule_mentors_mentorspopup_component__WEBPACK_IMPORTED_MODULE_9__["MentorsPopupComponent"],
                _components_schedule_mentees_menteespopup_component__WEBPACK_IMPORTED_MODULE_13__["MenteesPopupComponent"],
                _components_schedule_institutions_insitutionspopup_component__WEBPACK_IMPORTED_MODULE_14__["InstitutionsPopupComponent"],
                _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"],
                _components_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_11__["TimetableComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__["NgxSmartModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__["NgxSmartModalService"]],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 100px;\n  padding: 10px;\n  background-color: #214F81; }\n  .header h1 {\n    line-height: 80px;\n    color: white;\n    float: left;\n    display: block; }\n  .topnavigation {\n  background-color: white;\n  overflow: hidden;\n  list-style: none;\n  line-height: 60px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  display: flex;\n  justify-content: center; }\n  .topnavigation .navbarlist li {\n    display: inline-block; }\n  .topnavigation .navbarlist li a {\n      position: relative;\n      display: block;\n      padding: 0px 10px;\n      color: black;\n      text-decoration: none; }\n  .topnavigation .navbarlist li a:hover {\n      color: #214F81; }\n  .topnavigation .navbarlist li a.active-link {\n      background-color: #CEDFF2; }\n  #container {\n  display: flex;\n  justify-content: center;\n  padding: 20px 0px;\n  width: 100%; }\n  footer {\n  color: #214F81;\n  overflow: hidden;\n  min-height: 100px;\n  border-top: 2px solid #BBB;\n  padding: 20px; }\n"

/***/ }),

/***/ "./src/app/components/app/app.component.tpl.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/app/app.component.tpl.ts ***!
  \*****************************************************/
/*! exports provided: apptemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apptemplate", function() { return apptemplate; });
var apptemplate = "\n<div class=\"header\">\n    <h1 class=\"header-contet\">L\u00E1thatatlan iskola</h1>\n    <app-login></app-login>\n</div>\n<nav class=\"topnavigation\" id=\"mynav\">\n      <div>\n          <ul class=\"navbarlist\">\n              <li><a routerLink=\"\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{ exact: true }\">Kezd\u0151oldal</a></li>\n              <li><a routerLink=\"menetrend\" routerLinkActive=\"active-link\">Menetrend</a></li>\n              <li><a routerLink=\"regisztracio\" routerLinkActive=\"active-link\">Regisztr\u00E1ci\u00F3</a></li>\n              <li><a>Esem\u00E9nyek</a></li>\n              <li><a routerLink=\"orarend\" routerLinkActive=\"active-link\">\u00D3rarend</a></li>\n          </ul>\n      </div>\n  </nav>\n  <div id=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n  <footer>\n    <div class=\"footerdiv\">\n        <p>El\u00E9rhet\u0151s\u00E9gek:\n        </p>\n    </div>\n  </footer>\n  ";


/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component_tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.tpl */ "./src/app/components/app/app.component.tpl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: _app_component_tpl__WEBPACK_IMPORTED_MODULE_1__["apptemplate"],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.tpl.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/home/home.component.tpl.ts ***!
  \*******************************************************/
/*! exports provided: hometemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hometemplate", function() { return hometemplate; });
var hometemplate = "\n    <h1>Kezd\u0151oldal</h1>\n    <p>\n        ... <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        . <br>\n        ... <br>\n        ... <br>\n        ... <br>\n        ... <br>\n        ... <br>\n        ... <br>\n        ... <br>\n        ... <br>\n        ... <br>\n        ... <br>\n        ... <br>\n        ... <br>\n    </p>\n";


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_component_tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.tpl */ "./src/app/components/home/home.component.tpl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: _home_component_tpl__WEBPACK_IMPORTED_MODULE_1__["hometemplate"],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form[name=\"login-form\"] {\n  line-height: 40px;\n  display: block;\n  float: right; }\n  form[name=\"login-form\"] button {\n    background-color: #CEDFF2;\n    color: black;\n    border: none;\n    height: 30px; }\n  form[name=\"login-form\"] input {\n    height: 30px; }\n  form[name=\"login-form\"] .invalid-feedback {\n    color: red;\n    font-size: 12px;\n    line-height: 10px; }\n  form[name=\"login-form\"] button:hover {\n    cursor: pointer; }\n  .login-form-group {\n  float: left; }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.tpl.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/login/login.component.tpl.ts ***!
  \*********************************************************/
/*! exports provided: logintemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logintemplate", function() { return logintemplate; });
var logintemplate = "\n<form name=\"login-form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\n        <div class=\"login-form-group\">\n            <input type=\"text\" name=\"loginUsername\" [(ngModel)]=\"model.loginUsername\"\n            #loginUsername=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && loginUsername.invalid }\" required />\n            <div *ngIf=\"f.submitted && loginUsername.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"loginUsername.errors.required\">Add meg a felhaszn\u00E1l\u00F3neved!</div>\n            </div>\n        </div>\n        <div class=\"login-form-group\">\n            <input type=\"password\" name=\"loginPassword\" [(ngModel)]=\"model.loginPassword\"\n            #loginPassword=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && loginPassword.invalid }\" required/>\n            <div *ngIf=\"f.submitted && loginPassword.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"loginPassword.errors.required\">Add meg a jelszavad!</div>\n            </div>\n        </div>\n        <div class=\"login-form-group\">\n            <button [disabled]=\"loading\">Bejelentkez\u00E9s</button>\n        </div>\n    </form>\n";


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_component_tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.tpl */ "./src/app/components/login/login.component.tpl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.model = {};
    }
    LoginComponent.prototype.onSubmit = function () {
        console.log(this.model);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: _login_component_tpl__WEBPACK_IMPORTED_MODULE_1__["logintemplate"],
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/registration/registration.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  padding: 20px;\n  color: #444444;\n  width: 100%; }\n  .form-group input {\n    border: none;\n    border-bottom: 2px solid #CEDFF2;\n    height: 30px;\n    display: flex;\n    width: 20em; }\n  .form-group input:focus {\n    outline: none;\n    border-bottom: 2px solid #214F81; }\n  .form-group .invalid-feedback {\n    color: red;\n    font-size: 12px; }\n  .form-group button {\n    background-color: #214F81;\n    color: white;\n    font-size: 18px;\n    border: none;\n    height: 30px; }\n  .form-group button:hover {\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/registration/registration.component.tpl.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.tpl.ts ***!
  \***********************************************************************/
/*! exports provided: registrationTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registrationTemplate", function() { return registrationTemplate; });
var registrationTemplate = "\n<form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n        <label for=\"userName\">Felhaszn\u00E1l\u00F3n\u00E9v: </label>\n        <input type=\"text\" class=\"form-control\" name=\"userName\" [(ngModel)]=\"model.userName\"\n            #userName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && userName.invalid }\" required pattern=\"[a-zA-Z1-9]*\"/>\n        <div *ngIf=\"f.submitted && userName.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"userName.errors.required\">Add meg a felhaszn\u00E1l\u00F3neved!</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"jelszo\">Jelsz\u00F3: </label>\n        <input type=\"text\" class=\"form-control\" name=\"jelszo\" [(ngModel)]=\"model.jelszo\"\n            #jelszo=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && jelszo.invalid }\" required minlength=\"8\"/>\n        <div *ngIf=\"f.submitted && jelszo.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"jelszo.errors.required\">Add meg a jelszavad!</div>\n            <div *ngIf=\"jelszo.errors.minlength\">A jelsz\u00F3nak legal\u00E1bb 8 karakter hossz\u00FAnak kell lennie</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"fullName\">N\u00E9v: </label>\n        <input type=\"text\" class=\"form-control\" name=\"fullName\" [(ngModel)]=\"model.fullName\"\n            #fullName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && fullName.invalid }\" required />\n        <div *ngIf=\"f.submitted && fullName.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"fullName.errors.required\">Add meg a neved!</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"email\">E-mail c\u00EDm: </label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\"\n        #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required email/>\n        <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"email.errors.required\">Add meg az e-mail c\u00EDmed!</div>\n            <div *ngIf=\"email.errors.email\">\u00C9rv\u00E9nytelen e-mail c\u00EDm.</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"telefonszam\">Telefonsz\u00E1m:\n        <input type=\"text\" class=\"form-control\" name=\"telefonszam\" [(ngModel)]=\"model.telefonszam\"\n        #telefonszam=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && telefonszam.invalid }\" required /> </label>\n        <div *ngIf=\"f.submitted && telefonszam.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"telefonszam.errors.required\">Add meg a telefonsz\u00E1mod!</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"facebook\">Facebook adatlap: </label>\n        <input type=\"text\" class=\"form-control\" name=\"facebook\" [(ngModel)]=\"model.facebook\"\n        #facebook=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && facebook.invalid }\" required />\n        <div *ngIf=\"f.submitted && facebook.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"facebook.errors.required\">Add meg a facebook adatlapod linkj\u00E9t!</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"tantargy\">Tant\u00E1rgy: </label>\n        <input type=\"text\" class=\"form-control\" name=\"tantargy\" [(ngModel)]=\"model.tantargy\"\n        #tantargy=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && tantargy.invalid }\" required />\n        <div *ngIf=\"f.submitted && tantargy.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"tantargy.errors.required\">Add meg a tant\u00E1rgyat!</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\">Regisztr\u00E1ci\u00F3</button>\n    </div>\n</form>\n";


/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registration_component_tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.component.tpl */ "./src/app/components/registration/registration.component.tpl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
        this.model = {};
    }
    RegistrationComponent.prototype.onSubmit = function () {
        console.log(this.model);
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: _registration_component_tpl__WEBPACK_IMPORTED_MODULE_1__["registrationTemplate"],
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/components/registration/registration.component.scss")]
        })
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/components/schedule/institutions/insitutionspopup.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/schedule/institutions/insitutionspopup.component.ts ***!
  \********************************************************************************/
/*! exports provided: InstitutionsPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionsPopupComponent", function() { return InstitutionsPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _institutionspopup_component_tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./institutionspopup.component.tpl */ "./src/app/components/schedule/institutions/institutionspopup.component.tpl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var InstitutionsPopupComponent = /** @class */ (function () {
    function InstitutionsPopupComponent() {
    }
    InstitutionsPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-institutions-popup',
            template: _institutionspopup_component_tpl__WEBPACK_IMPORTED_MODULE_1__["institutionsPopupTemplate"],
            styles: [__webpack_require__(/*! ./institutionspopup.component.scss */ "./src/app/components/schedule/institutions/institutionspopup.component.scss")]
        })
    ], InstitutionsPopupComponent);
    return InstitutionsPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/schedule/institutions/institutionspopup.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/schedule/institutions/institutionspopup.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/schedule/institutions/institutionspopup.component.tpl.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/schedule/institutions/institutionspopup.component.tpl.ts ***!
  \*************************************************************************************/
/*! exports provided: institutionsPopupTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "institutionsPopupTemplate", function() { return institutionsPopupTemplate; });
var institutionsPopupTemplate = "\n    <ngx-smart-modal #institutionsPopup [identifier]=\"'institutionsPopup'\">\n    <table>\n        <tr>\n            <td>N\u00E9v: </td>\n            <td>{{institutionsPopup.getData()}}</td>\n        </tr>\n        <tr>\n            <td>E-mail c\u00EDm: </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>Telefonsz\u00E1m: </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>Facebook adatlap:  </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>C\u00EDm: </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>Vezet\u0151: </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>Int\u00E9zm\u00E9ny felel\u0151s: </td>\n            <td></td>\n        </tr>\n    </table>\n    <button (click)=\"institutionsPopup.close()\">Close</button>\n    </ngx-smart-modal>\n    ";


/***/ }),

/***/ "./src/app/components/schedule/mentees/menteespopup.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/schedule/mentees/menteespopup.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/schedule/mentees/menteespopup.component.tpl.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/schedule/mentees/menteespopup.component.tpl.ts ***!
  \***************************************************************************/
/*! exports provided: menteesPopupTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menteesPopupTemplate", function() { return menteesPopupTemplate; });
var menteesPopupTemplate = "\n    <ngx-smart-modal #menteesPopup [identifier]=\"'menteesPopup'\">\n    <table>\n        <tr>\n            <td>N\u00E9v: </td>\n            <td>{{menteesPopup.getData()}}</td>\n        </tr>\n        <tr>\n            <td>Sz\u00FClet\u00E9si d\u00E1tum: </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>Oszt\u00E1ly: </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>Tant\u00E1rgy:  </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>Int\u00E9zm\u00E9ny: </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>Megjegyz\u00E9s: </td>\n            <td></td>\n        </tr>\n    </table>\n    <button (click)=\"menteesPopup.close()\">Close</button>\n    </ngx-smart-modal>\n    ";


/***/ }),

/***/ "./src/app/components/schedule/mentees/menteespopup.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/schedule/mentees/menteespopup.component.ts ***!
  \***********************************************************************/
/*! exports provided: MenteesPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenteesPopupComponent", function() { return MenteesPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menteespopup_component_tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menteespopup.component.tpl */ "./src/app/components/schedule/mentees/menteespopup.component.tpl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MenteesPopupComponent = /** @class */ (function () {
    function MenteesPopupComponent() {
    }
    MenteesPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mentees-popup',
            template: _menteespopup_component_tpl__WEBPACK_IMPORTED_MODULE_1__["menteesPopupTemplate"],
            styles: [__webpack_require__(/*! ./menteespopup.component.scss */ "./src/app/components/schedule/mentees/menteespopup.component.scss")]
        })
    ], MenteesPopupComponent);
    return MenteesPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/schedule/mentors/mentorspopup.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/schedule/mentors/mentorspopup.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/schedule/mentors/mentorspopup.component.tpl.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/schedule/mentors/mentorspopup.component.tpl.ts ***!
  \***************************************************************************/
/*! exports provided: mentorsPopupTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mentorsPopupTemplate", function() { return mentorsPopupTemplate; });
var mentorsPopupTemplate = "\n    <ngx-smart-modal #mentorsPopup [identifier]=\"'mentorsPopup'\">\n    <table>\n        <tr>\n            <td>N\u00E9v: </td>\n            <td>{{mentorsPopup.getData()}}</td>\n        </tr>\n        <tr>\n            <td>E-mail c\u00EDm: </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>Telefonsz\u00E1m: </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>Facebook adatlap:  </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>Korcsoport: </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>Tant\u00E1rgy: </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>Int\u00E9zm\u00E9ny felel\u0151s: </td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>Megjegyz\u00E9s: </td>\n            <td></td>\n        </tr>\n    </table>\n    <button (click)=\"mentorsPopup.close()\">Close</button>\n    </ngx-smart-modal>\n    ";


/***/ }),

/***/ "./src/app/components/schedule/mentors/mentorspopup.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/schedule/mentors/mentorspopup.component.ts ***!
  \***********************************************************************/
/*! exports provided: MentorsPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorsPopupComponent", function() { return MentorsPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mentorspopup_component_tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mentorspopup.component.tpl */ "./src/app/components/schedule/mentors/mentorspopup.component.tpl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MentorsPopupComponent = /** @class */ (function () {
    function MentorsPopupComponent() {
    }
    MentorsPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mentors-popup',
            template: _mentorspopup_component_tpl__WEBPACK_IMPORTED_MODULE_1__["mentorsPopupTemplate"],
            styles: [__webpack_require__(/*! ./mentorspopup.component.scss */ "./src/app/components/schedule/mentors/mentorspopup.component.scss")]
        })
    ], MentorsPopupComponent);
    return MentorsPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/schedule/schedule.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-spacing: 0px; }\n  table th, table td {\n    text-align: center;\n    padding: 5px 10px; }\n  table th {\n    background-color: #214F81;\n    color: white; }\n  table tr:nth-child(even) {\n    background-color: #CEDFF2; }\n  table .popuptr:hover {\n    color: #214F81;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/schedule/schedule.component.tpl.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.tpl.ts ***!
  \***************************************************************/
/*! exports provided: scheduletemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduletemplate", function() { return scheduletemplate; });
var scheduletemplate = "\n<app-mentors-popup></app-mentors-popup>\n<app-mentees-popup></app-mentees-popup>\n<app-institutions-popup></app-institutions-popup>\n<div>\n<table>\n    <thead>\n        <th>Mentor</th>\n        <th>Mentor\u00E1lt</th>\n        <th>Int\u00E9zm\u00E9ny</th>\n        <th>Mappa link</th>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let contact of contacts; let i=index\">\n            <td class=popuptr (click)=\"showMentor(i)\">{{contact.mentor}}</td>\n            <td class=popuptr (click)=\"showMentored(i)\">{{contact.mentoralt}}</td>\n            <td class=popuptr (click)=\"showInstitution(i)\">{{contact.intezmeny}}</td>\n            <td>{{contact.mappa}}</td>\n        </tr>\n    </tbody>\n</table>\n</div>\n";


/***/ }),

/***/ "./src/app/components/schedule/schedule.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.ts ***!
  \***********************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _schedule_component_tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.component.tpl */ "./src/app/components/schedule/schedule.component.tpl.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(ngxSmartModalService) {
        this.ngxSmartModalService = ngxSmartModalService;
        this.contacts = [
            { mentor: 'Béla', mentoralt: 'Pisti', intezmeny: 'int1', mappa: 'link1' },
            { mentor: 'Kati', mentoralt: 'Dori', intezmeny: 'int2', mappa: 'link2' },
            { mentor: 'Kati', mentoralt: 'Dori', intezmeny: 'int3', mappa: 'link3' }
        ];
    }
    ScheduleComponent.prototype.showMentor = function (index) {
        this.ngxSmartModalService.getModal('mentorsPopup').open();
        this.ngxSmartModalService.setModalData(this.contacts[index].mentor, 'mentorsPopup', true);
    };
    ScheduleComponent.prototype.showMentored = function (index) {
        this.ngxSmartModalService.getModal('menteesPopup').open();
        this.ngxSmartModalService.setModalData(this.contacts[index].mentoralt, 'menteesPopup', true);
    };
    ScheduleComponent.prototype.showInstitution = function (index) {
        this.ngxSmartModalService.getModal('institutionsPopup').open();
        this.ngxSmartModalService.setModalData(this.contacts[index].intezmeny, 'institutionsPopup', true);
    };
    ScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule',
            template: _schedule_component_tpl__WEBPACK_IMPORTED_MODULE_1__["scheduletemplate"],
            styles: [__webpack_require__(/*! ./schedule.component.scss */ "./src/app/components/schedule/schedule.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__["NgxSmartModalService"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/components/timetable/timetable.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/timetable/timetable.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-spacing: 0px; }\n  table th, table td {\n    text-align: center;\n    padding: 5px 10px; }\n  table th {\n    background-color: #214F81;\n    color: white; }\n  table tr:nth-child(even) {\n    background-color: #CEDFF2; }\n"

/***/ }),

/***/ "./src/app/components/timetable/timetable.component.tpl.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/timetable/timetable.component.tpl.ts ***!
  \*****************************************************************/
/*! exports provided: timetableTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timetableTemplate", function() { return timetableTemplate; });
var timetableTemplate = "\n<div>\n    <table>\n        <thead>\n            <th>\u00D3rasz\u00E1m</th>\n            <th>D\u00E1tum</th>\n            <th>Id\u0151pont</th>\n            <th>Helysz\u00EDn</th>\n            <th>Tant\u00E1rgy</th>\n            <th>T\u00E9ma</th>\n            <th>Megjegyz\u00E9s</th>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let lesson of lessons\">\n            <td>{{lesson.oraszam}}</td>\n            <td>{{lesson.datum}}</td>\n            <td>{{lesson.idopont}}</td>\n            <td>{{lesson.helyszin}}</td>\n            <td>{{lesson.tantargy}}</td>\n            <td>{{lesson.tema}}</td>\n            <td>{{lesson.megjegyzes}}</td>\n        <tr>\n        </tbody>\n    </table>\n</div>\n";


/***/ }),

/***/ "./src/app/components/timetable/timetable.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/timetable/timetable.component.ts ***!
  \*************************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _timetable_component_tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timetable.component.tpl */ "./src/app/components/timetable/timetable.component.tpl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimetableComponent = /** @class */ (function () {
    function TimetableComponent() {
        this.lessons = [
            { oraszam: 1, datum: '2018.01.02.', idopont: '12:00', helyszin: 'Egyetem',
                tantargy: 'matek', tema: 'egész számok', megjegyzes: 'hasznos' },
            { oraszam: 2, datum: '2018.01.09.', idopont: '12:00', helyszin: 'Egyetem',
                tantargy: 'matek', tema: 'egész számok', megjegyzes: 'nem tudott figyelni' },
            { oraszam: 3, datum: '2018.01.016.', idopont: '12:00', helyszin: 'Egyetem',
                tantargy: 'matek', tema: 'egész számok', megjegyzes: 'betegeskedett' }
        ];
    }
    TimetableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timetable',
            template: _timetable_component_tpl__WEBPACK_IMPORTED_MODULE_1__["timetableTemplate"],
            styles: [__webpack_require__(/*! ./timetable.component.scss */ "./src/app/components/timetable/timetable.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TimetableComponent);
    return TimetableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kisfiu/git/rft-project/rftfrontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map