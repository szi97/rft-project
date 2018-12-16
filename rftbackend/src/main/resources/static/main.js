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
/*! exports provided: appRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/schedule/schedule.component */ "./src/app/components/schedule/schedule.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/timetable/timetable.component */ "./src/app/components/timetable/timetable.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_events_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/events/event.component */ "./src/app/components/events/event.component.ts");
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
    { path: 'orarend', component: _components_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_5__["TimetableComponent"] },
    { path: 'bejelentkezes', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'esemenyek', component: _components_events_event_component__WEBPACK_IMPORTED_MODULE_7__["EventComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true })
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
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/schedule/schedule.component */ "./src/app/components/schedule/schedule.component.ts");
/* harmony import */ var _components_schedule_mentors_mentorspopup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/schedule/mentors/mentorspopup.component */ "./src/app/components/schedule/mentors/mentorspopup.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/timetable/timetable.component */ "./src/app/components/timetable/timetable.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_schedule_mentees_menteespopup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/schedule/mentees/menteespopup.component */ "./src/app/components/schedule/mentees/menteespopup.component.ts");
/* harmony import */ var _components_schedule_institutions_insitutionspopup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/schedule/institutions/insitutionspopup.component */ "./src/app/components/schedule/institutions/insitutionspopup.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_timetable_newlesson_newlessonpopup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/timetable/newlesson/newlessonpopup.component */ "./src/app/components/timetable/newlesson/newlessonpopup.component.ts");
/* harmony import */ var _components_events_event_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/events/event.component */ "./src/app/components/events/event.component.ts");
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
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleComponent"],
                _components_schedule_mentors_mentorspopup_component__WEBPACK_IMPORTED_MODULE_11__["MentorsPopupComponent"],
                _components_schedule_mentees_menteespopup_component__WEBPACK_IMPORTED_MODULE_15__["MenteesPopupComponent"],
                _components_schedule_institutions_insitutionspopup_component__WEBPACK_IMPORTED_MODULE_16__["InstitutionsPopupComponent"],
                _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationComponent"],
                _components_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_13__["TimetableComponent"],
                _components_timetable_newlesson_newlessonpopup_component__WEBPACK_IMPORTED_MODULE_18__["NewLessonPopupComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _components_events_event_component__WEBPACK_IMPORTED_MODULE_19__["EventComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__["NgxSmartModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlNativeDateTimeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            providers: [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__["NgxSmartModalService"]],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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

module.exports = ".header {\n  display: flex;\n  justify-content: center;\n  height: 200px;\n  padding: 0px;\n  background-color: white;\n  position: relative; }\n  .header img {\n    height: 200px; }\n  .header h1 {\n    line-height: 80px;\n    color: white;\n    float: left;\n    display: block; }\n  .topnavigation {\n  background-color: #214F81;\n  overflow: hidden;\n  list-style: none;\n  line-height: 60px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  display: flex;\n  justify-content: center;\n  box-shadow: 0px 8px 10px -4px black; }\n  .topnavigation .navbarlist li {\n    display: inline-block; }\n  .topnavigation .navbarlist li a {\n      position: relative;\n      display: block;\n      padding: 0px 10px;\n      color: white;\n      text-decoration: none; }\n  .topnavigation .navbarlist li a:hover {\n      color: #CEDFF2; }\n  .topnavigation .navbarlist li a.active-link {\n      color: white;\n      text-decoration: underline; }\n  #container {\n  display: flex;\n  justify-content: center;\n  padding: 20px 0px;\n  width: 100%; }\n  footer {\n  color: #214F81;\n  overflow: hidden;\n  min-height: 100px;\n  border-top: 2px solid #BBB;\n  padding: 20px; }\n"

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
var apptemplate = "\n<div class=\"header\">\n    <img src=\"../assets/lathatatlan_logokek.png\">\n</div>\n<nav class=\"topnavigation\" id=\"mynav\">\n      <div>\n          <ul class=\"navbarlist\">\n              <li><a routerLink=\"\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{ exact: true }\">Kezd\u0151oldal</a></li>\n              <li><a routerLink=\"menetrend\" routerLinkActive=\"active-link\">Menetrend</a></li>\n              <li><a routerLink=\"regisztracio\" routerLinkActive=\"active-link\">Regisztr\u00E1ci\u00F3</a></li>\n              <li><a routerLink=\"esemenyek\" routerLinkActive=\"active-link\">Esem\u00E9nyek</a></li>\n              <li><a routerLink=\"orarend\" routerLinkActive=\"active-link\">\u00D3rarend</a></li>\n              <li><a routerLink=\"bejelentkezes\" routerLinkActive=\"active-link\">Bejelentkez\u00E9s</a></li>\n          </ul>\n      </div>\n  </nav>\n  <div id=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n  <footer>\n    <div class=\"footerdiv\">\n        <p>El\u00E9rhet\u0151s\u00E9gek:\n        </p>\n    </div>\n  </footer>\n  ";


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

/***/ "./src/app/components/events/event.component.scss":
/*!********************************************************!*\
  !*** ./src/app/components/events/event.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  margin: 10px;\n  text-align: center; }\n  table #date {\n    border-color: #214F81;\n    border-style: solid;\n    border-width: 20px 2px 0px 2px;\n    font-size: 25px;\n    min-width: 80px;\n    vertical-align: bottom; }\n  table #time {\n    border-color: #214F81;\n    border-style: solid;\n    border-width: 0px 2px 2px 2px;\n    font-size: 12px;\n    vertical-align: top; }\n  table .content {\n    min-width: 200px; }\n"

/***/ }),

/***/ "./src/app/components/events/event.component.tpl.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/events/event.component.tpl.ts ***!
  \**********************************************************/
/*! exports provided: eventTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventTemplate", function() { return eventTemplate; });
var eventTemplate = "\n<div>\n    <table *ngFor=\"let event of events\">\n        <tr>\n            <td id=\"date\">{{event.date | date: 'MM.dd.'}}</td>\n            <td class=\"content\">{{event.name}}</td>\n        </tr>\n        <tr>\n            <td id=\"time\">{{event.time}}</td>\n            <td class=\"content\">{{event.location}}</td>\n        </tr>\n    </table>\n</div>\n";


/***/ }),

/***/ "./src/app/components/events/event.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/events/event.component.ts ***!
  \******************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _event_component_tpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.component.tpl */ "./src/app/components/events/event.component.tpl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventComponent = /** @class */ (function () {
    function EventComponent(http) {
        var _this = this;
        http.get('/events').subscribe(function (result) { return (_this.events = result); });
    }
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: _event_component_tpl__WEBPACK_IMPORTED_MODULE_2__["eventTemplate"],
            styles: [__webpack_require__(/*! ./event.component.scss */ "./src/app/components/events/event.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventComponent);
    return EventComponent;
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

module.exports = "#container {\n  padding: 20px;\n  color: #444444;\n  width: 100%; }\n  #container .login-form-group {\n    padding: 10px; }\n  #container input {\n    border: none;\n    border-bottom: 2px solid #CEDFF2;\n    height: 30px;\n    display: flex;\n    width: 20em; }\n  #container input:focus {\n    outline: none;\n    border-bottom: 2px solid #214F81; }\n  #container .invalid-feedback {\n    color: red;\n    font-size: 12px; }\n  #container button {\n    background-color: #214F81;\n    color: white;\n    font-size: 18px;\n    border: none;\n    height: 30px; }\n  #container button:hover {\n    cursor: pointer; }\n"

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
var logintemplate = "\n<div id=\"container\">\n    <form name=\"login-form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\n        <div class=\"login-form-group\">\n            <label for=\"email\">E-mail c\u00EDm:</label>\n            <input type=\"text\" name=\"email\" [(ngModel)]=\"model.email\"\n            #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required email/>\n            <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"email.errors.required\">Add meg a felhaszn\u00E1l\u00F3neved!</div>\n                <div *ngIf=\"email.errors.email\">Nem megfelel\u0151 form\u00E1tum</div>\n            </div>\n        </div>\n        <div class=\"login-form-group\">\n            <label for=\"password\">Jelsz\u00F3:</label>\n            <input  type=\"password\" name=\"password\" [(ngModel)]=\"model.password\"\n            #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required minlength=\"8\"/>\n            <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"password.errors.required\">Add meg a jelszavad!</div>\n                <div *ngIf=\"password.errors.minlength\">A jelsz\u00F3nak legal\u00E1bb 8 karakter hossz\u00FAnak kell lennie</div>\n            </div>\n        </div>\n        <div class=\"login-form-group\">\n            <button [disabled]=\"loading\">Bejelentkez\u00E9s</button>\n        </div>\n    </form>\n</div>\n";


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(http) {
        this.http = http;
        this.model = {};
    }
    LoginComponent.prototype.onSubmit = function () {
        console.log(this.model);
        // this.http.post('/register', this.model, {responseType: 'text'}).subscribe(status => console.log(status));
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: _login_component_tpl__WEBPACK_IMPORTED_MODULE_1__["logintemplate"],
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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

module.exports = ".form-group {\n  padding: 20px;\n  color: #444444;\n  width: 100%; }\n  .form-group input[type=\"text\"], .form-group input[type=\"password\"] {\n    border: none;\n    border-bottom: 2px solid #CEDFF2;\n    height: 30px;\n    display: flex;\n    width: 20em; }\n  .form-group input:focus {\n    outline: none;\n    border-bottom: 2px solid #214F81; }\n  .form-group .invalid-feedback {\n    color: red;\n    font-size: 12px; }\n  .form-group .input[type=\"checkbox\"] + label span {\n    height: 15px;\n    width: 15px; }\n  .form-group button {\n    background-color: #214F81;\n    color: white;\n    font-size: 18px;\n    border: none;\n    height: 30px; }\n  .form-group button:hover {\n    cursor: pointer; }\n"

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
var registrationTemplate = "\n<form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n        <label for=\"email\">E-mail c\u00EDm: </label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\"\n        #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required email/>\n        <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"email.errors.required\">Add meg az e-mail c\u00EDmed!</div>\n            <div *ngIf=\"email.errors.email\">\u00C9rv\u00E9nytelen e-mail c\u00EDm.</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Jelsz\u00F3: </label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\"\n            #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required minlength=\"8\"/>\n        <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"password.errors.required\">Add meg a jelszavad\"!</div>\n            <div *ngIf=\"password.errors.minlength\">A jelsz\u00F3nak legal\u00E1bb 8 karakter hossz\u00FAnak kell lennie</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"name\">N\u00E9v: </label>\n        <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"model.name\"\n            #name=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required />\n        <div *ngIf=\"f.submitted && name.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"name.errors.required\">Add meg a neved!</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"phoneNumber\">Telefonsz\u00E1m:</label>\n        <input type=\"text\" class=\"form-control\" name=\"phoneNumber\" [(ngModel)]=\"model.phoneNumber\"\n        #phoneNumber=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && phoneNumber.invalid }\" required />\n        <div *ngIf=\"f.submitted && phoneNumber.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"phoneNumber.errors.required\">Add meg a telefonsz\u00E1mod!</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"facebook\">Facebook adatlap: </label>\n        <input type=\"text\" class=\"form-control\" name=\"facebook\" [(ngModel)]=\"model.facebook\"\n        #facebook=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && facebook.invalid }\" required />\n        <div *ngIf=\"f.submitted && facebook.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"facebook.errors.required\">Add meg a facebook adatlapod linkj\u00E9t!</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"agegroups\">Korcsoport: </label>\n        <div *ngFor=\"let agegroup of agegroups\">\n        <input type=\"checkbox\" name=\"agegroups\" value=\"{{agegroup}}\" (change)=\"updateCheckedAgegroups(agegroup, $event)\" />\n            <label><span></span>{{agegroup}}</label>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"subjects\">Tant\u00E1rgy: </label>\n        <div *ngFor=\"let subject of subjects\">\n        <input type=\"checkbox\" name=\"subjects\" value=\"{{subject}}\" (change)=\"updateCheckedSubjects(subject, $event)\" />\n            <label><span></span>{{subject}}</label>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\">Regisztr\u00E1ci\u00F3</button>\n    </div>\n</form>\n";


/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent, Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registration_component_tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.component.tpl */ "./src/app/components/registration/registration.component.tpl.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(http) {
        this.http = http;
        this.model = new Model('', '', '', '', '', [], []);
        this.subjects = [
            'Magyar irodalom és nyelvtan', 'Angol', 'Német', 'Földrajz', 'Kémia', 'Fizika', 'Történelem', 'Infomatika', 'Biológia', 'Matematika'
        ];
        this.agegroups = [
            'Általános iskola 1-4', 'Általános iskola 5-8', 'Középiskola 1. év', 'Középiskola 2. év',
            'Középiskola 3. év', 'Középiskola 4. év', 'Érettségi felkészítés'
        ];
    }
    RegistrationComponent.prototype.onSubmit = function () {
        console.log(this.model);
        this.http.post('/register', this.model, { responseType: 'text' }).subscribe(function (status) { return console.log(status); });
    };
    RegistrationComponent.prototype.updateCheckedSubjects = function (subject, event) {
        if (event.target.checked) {
            this.model.subjects.push(subject);
        }
        else {
            this.model.subjects.splice(this.model.subjects.indexOf(subject), 1);
        }
    };
    RegistrationComponent.prototype.updateCheckedAgegroups = function (agegroup, event) {
        if (event.target.checked) {
            this.model.agegroups.push(agegroup);
        }
        else {
            this.model.agegroups.splice(this.model.agegroups.indexOf(agegroup), 1);
        }
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: _registration_component_tpl__WEBPACK_IMPORTED_MODULE_1__["registrationTemplate"],
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/components/registration/registration.component.scss")],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: '/regisztracio' }]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());

var Model = /** @class */ (function () {
    function Model(email1, password1, name1, phone1, facebook1, agegroup1, subject1) {
        this.email = email1;
        this.password = password1;
        this.name = name1;
        this.phoneNumber = phone1;
        this.facebook = facebook1;
        this.subjects = subject1;
        this.agegroups = agegroup1;
    }
    return Model;
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
var institutionsPopupTemplate = "\n    <ngx-smart-modal #institutionsPopup [identifier]=\"'institutionsPopup'\">\n    <table>\n        <tr>\n            <td>N\u00E9v: </td>\n            <td>{{institutionsPopup.getData().name}}</td>\n        </tr>\n        <tr>\n            <td>E-mail c\u00EDm: </td>\n            <td>{{institutionsPopup.getData().email}}</td>\n        </tr>\n        <tr>\n            <td>Telefonsz\u00E1m: </td>\n            <td>{{institutionsPopup.getData().phone}}</td>\n        </tr>\n        <tr>\n            <td>C\u00EDm: </td>\n            <td>{{institutionsPopup.getData().address}}</td>\n        </tr>\n        <tr>\n            <td>Vezet\u0151: </td>\n            <td>{{institutionsPopup.getData().director}}</td>\n        </tr>\n        <tr>\n            <td>Int\u00E9zm\u00E9ny felel\u0151s: </td>\n            <td>{{institutionsPopup.getData().responsible}}</td>\n        </tr>\n    </table>\n    <button (click)=\"institutionsPopup.close()\">Close</button>\n    </ngx-smart-modal>\n    ";


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
var menteesPopupTemplate = "\n    <ngx-smart-modal #menteesPopup [identifier]=\"'menteesPopup'\">\n    <table>\n        <tr>\n            <td>N\u00E9v: </td>\n            <td>{{menteesPopup.getData().name}}</td>\n        </tr>\n        <tr>\n            <td>Sz\u00FClet\u00E9si d\u00E1tum: </td>\n            <td>{{menteesPopup.getData().birth}}</td>\n        </tr>\n        <tr>\n            <td>Oszt\u00E1ly: </td>\n            <td>{{menteesPopup.getData().schoolclass}}</td>\n        </tr>\n        <tr>\n            <td>Tant\u00E1rgy:  </td>\n            <td>{{menteesPopup.getData().subject}}</td>\n        </tr>\n        <tr>\n            <td>Int\u00E9zm\u00E9ny: </td>\n            <td>{{menteesPopup.getData().institutionid}}</td>\n        </tr>\n        <tr>\n            <td>Megjegyz\u00E9s: </td>\n            <td>comment</td>\n        </tr>\n    </table>\n    <button (click)=\"menteesPopup.close()\">Close</button>\n    </ngx-smart-modal>\n    ";


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
var mentorsPopupTemplate = "\n    <ngx-smart-modal #mentorsPopup [identifier]=\"'mentorsPopup'\">\n    <table>\n        <tr>\n            <td>N\u00E9v: </td>\n            <td>{{mentorsPopup.getData().name}}</td>\n        </tr>\n        <tr>\n            <td>E-mail c\u00EDm: </td>\n            <td>{{mentorsPopup.getData().email}}</td>\n        </tr>\n        <tr>\n            <td>Telefonsz\u00E1m: </td>\n            <td>{{mentorsPopup.getData().phone}}</td>\n        </tr>\n        <tr>\n            <td>Facebook adatlap:  </td>\n            <td>{{mentorsPopup.getData().facebook}}</td>\n        </tr>\n        <tr>\n            <td>Korcsoport: </td>\n            <td>{{mentorsPopup.getData().agegroup}}</td>\n        </tr>\n        <tr>\n            <td>Tant\u00E1rgy: </td>\n            <td>{{mentorsPopup.getData().subject}}</td>\n        </tr>\n        <tr>\n            <td>Int\u00E9zm\u00E9ny felel\u0151s: </td>\n            <td>{{mentorsPopup.getData().responsible}}</td>\n        </tr>\n        <tr>\n            <td>Megjegyz\u00E9s: </td>\n            <td>{{mentorsPopup.getData().comment}}</td>\n        </tr>\n    </table>\n    <button (click)=\"mentorsPopup.close()\">Close</button>\n    </ngx-smart-modal>\n    ";


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

module.exports = "table {\n  border-spacing: 0px; }\n  table th, table td {\n    text-align: center;\n    padding: 5px 10px;\n    min-width: 200px;\n    height: 40px; }\n  table th {\n    background-color: #214F81;\n    color: white; }\n  table tr:nth-child(odd) > td {\n    background-color: #CEDFF2; }\n  table p {\n    background-color: white;\n    height: 100%; }\n  table td > input:disabled {\n    border: none;\n    display: flex;\n    background-color: transparent;\n    color: black; }\n  table td > input:disabled:hover {\n    color: #214F81;\n    cursor: pointer; }\n  .filtering-select {\n  padding: 10px; }\n  select {\n  height: 30px;\n  border: none; }\n"

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
var scheduletemplate = "\n<app-mentors-popup></app-mentors-popup>\n<app-mentees-popup></app-mentees-popup>\n<app-institutions-popup></app-institutions-popup>\n<div>\n    <div class=filtering-select>\n        Sz\u0171r\u00E9s:\n        <select [(ngModel)]=\"actualInstitution\">\n            <option>Int\u00E9zm\u00E9ny</option>\n            <option *ngFor=\"let institution of allInstitutions\">{{institution.name}}</option>\n        </select>\n    </div>\n<table>\n    <thead>\n        <th>Mentor</th>\n        <th>Mentor\u00E1lt</th>\n        <th>Int\u00E9zm\u00E9ny</th>\n        <th>Mappa link</th>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let contact of getCorrectContacts(); let i = index\">\n            <td class=popuptr (click)=\"i !== editableRow && showMentor(contact.mentorId)\">\n                <input [(ngModel)]=\"contact.mentorName\" value={{contact.mentorName}} [disabled]=\"i !== editableRow\">\n            </td>\n            <td class=popuptr (click)=\"i !== editableRow && showMentee(contact.menteeId)\">\n                <input [(ngModel)]=\"contact.menteeName\" value={{contact.menteeName}} [disabled]=\"i !== editableRow\">\n            </td>\n            <td class=popuptr (click)=\"i !== editableRow && showInstitution(contact.institutionId)\">\n                <input [(ngModel)]=\"contact.institutionName\" value={{contact.institutionName}} [disabled]=\"i !== editableRow\">\n            </td>\n            <td><input [(ngModel)]=\"contact.folderLink\" value={{contact.folderLink}} [disabled]=\"i !== editableRow\"></td>\n            <p *ngIf=\"i !== editableRow\" (click)=\"editRow(contact, i)\">Edit</p>\n            <p *ngIf=\"i === editableRow\" (click)=\"saveModification(contact)\">Ment\u00E9s</p>\n            <p *ngIf=\"i === editableRow\" (click)=\"cancelModification(i)\">M\u00E9gse</p>\n        </tr>\n        <tr *ngIf=\"createNewContact == true\">\n            <td><select (change)=\"SetNewContactMentor($event.target.selectedIndex)\">\n                <option *ngFor=\"let mentor of allMentors\">{{mentor.name}}</option>\n                </select>\n            </td>\n            <td><select (change)=\"SetNewContactMentee($event.target.selectedIndex)\">\n                <option *ngFor=\"let mentee of allMentees\">{{mentee.name}}</option>\n                </select>\n            </td>\n            <td><select (change)=\"SetNewContactInstitution($event.target.selectedIndex)\">\n                <option *ngFor=\"let institution of allInstitutions\">{{institution.name}}</option>\n                </select>\n            </td>\n            <td><input [(ngModel)]=\"newContact.folder\"></td>\n            <p (click)=\"addContact()\">Ment\u00E9s</p>\n        </tr>\n    </tbody>\n</table>\n<button *ngIf=\"createNewContact == false\" (click)=\"setDefaultNewContact()\">+ \u00DAj sor</button>\n</div>\n";


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function ScheduleComponent(ngxSmartModalService, http) {
        var _this = this;
        this.ngxSmartModalService = ngxSmartModalService;
        this.http = http;
        this.createNewContact = false;
        this.newContact = { mentorId: 0, mentorName: '', menteeId: 0, menteeName: '', institutionId: 0, institutionName: '', folderLink: '' };
        this.actualInstitution = 'Intézmény';
        this.editableRow = -1;
        this.modifiedRow = { mentorName: '', menteeName: '', institutionName: '', folderLink: '' };
        this.http.get('/menetrend').subscribe(function (result) {
            _this.contacts = Object.values(result)[0];
            _this.usersRole = Object.keys(result)[0];
        });
        this.http.get('/testmentee').subscribe(function (result) { return _this.allMentees = result; });
        this.http.get('/testmentor').subscribe(function (result) { return _this.allMentors = result; });
        this.http.get('/testinstitution').subscribe(function (result) { return _this.allInstitutions = result; });
    }
    ScheduleComponent.prototype.showMentor = function (id) {
        this.ngxSmartModalService.getModal('mentorsPopup').open();
        this.ngxSmartModalService.setModalData(this.allMentors.filter(function (m) { return m.id === id; })[0], 'mentorsPopup', true);
    };
    ScheduleComponent.prototype.showMentee = function (id) {
        this.ngxSmartModalService.getModal('menteesPopup').open();
        this.ngxSmartModalService.setModalData(this.allMentees.filter(function (m) { return m.id === id; })[0], 'menteesPopup', true);
    };
    ScheduleComponent.prototype.showInstitution = function (id) {
        this.ngxSmartModalService.getModal('institutionsPopup').open();
        this.ngxSmartModalService.setModalData(this.allInstitutions.filter(function (i) { return i.id === id; })[0], 'institutionsPopup', true);
    };
    ScheduleComponent.prototype.getCorrectContacts = function () {
        var _this = this;
        if (this.actualInstitution === 'Intézmény') {
            return this.contacts;
        }
        else {
            return this.contacts.filter(function (c) { return c.institutionName === _this.actualInstitution; });
        }
    };
    ScheduleComponent.prototype.setDefaultNewContact = function () {
        this.createNewContact = !this.createNewContact;
        this.SetNewContactMentor(0);
        this.SetNewContactMentee(0);
        this.SetNewContactInstitution(0);
    };
    ScheduleComponent.prototype.SetNewContactMentor = function (index) {
        this.newContact.mentorId = this.allMentors[index].id;
        this.newContact.mentorName = this.allMentors[index].name;
    };
    ScheduleComponent.prototype.SetNewContactMentee = function (index) {
        this.newContact.menteeId = this.allMentees[index].id;
        this.newContact.menteeName = this.allMentees[index].name;
    };
    ScheduleComponent.prototype.SetNewContactInstitution = function (index) {
        this.newContact.institutionId = this.allInstitutions[index].id;
        this.newContact.institutionName = this.allInstitutions[index].name;
    };
    ScheduleComponent.prototype.addContact = function () {
        this.createNewContact = !this.createNewContact;
        console.log(this.newContact);
        //  this.http.post('/?', this.newContact, {responseType: 'text'}).subscribe(status => console.log(status));
    };
    ScheduleComponent.prototype.editRow = function (contact, index) {
        this.modifiedRow.mentorName = contact.mentorName;
        this.modifiedRow.menteeName = contact.menteeName;
        this.modifiedRow.institutionName = contact.institutionName;
        this.modifiedRow.folderLink = contact.folderLink;
        this.editableRow = index;
    };
    ScheduleComponent.prototype.saveModification = function (contact) {
        this.editableRow = -1;
        console.log(contact);
        // this.http.post('/?', contact, {responseType: 'text'}).subscribe(status => console.log(status));
    };
    ScheduleComponent.prototype.cancelModification = function (index) {
        this.contacts[index].mentorName = this.modifiedRow.mentorName;
        this.contacts[index].menteeName = this.modifiedRow.menteeName;
        this.contacts[index].institutionName = this.modifiedRow.institutionName;
        this.contacts[index].folderLink = this.modifiedRow.folderLink;
        this.editableRow = -1;
    };
    ScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule',
            template: _schedule_component_tpl__WEBPACK_IMPORTED_MODULE_1__["scheduletemplate"],
            styles: [__webpack_require__(/*! ./schedule.component.scss */ "./src/app/components/schedule/schedule.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__["NgxSmartModalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/components/timetable/newlesson/newlessonpopup.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/timetable/newlesson/newlessonpopup.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  padding: 10px; }\n  div input {\n    border: none;\n    border-bottom: 2px solid #CEDFF2;\n    height: 30px;\n    display: flex;\n    width: 100%; }\n  div textarea {\n    border: none;\n    border-bottom: 2px solid #CEDFF2;\n    min-height: 100px;\n    display: flex;\n    width: 90%; }\n  div input:focus, div textarea:focus {\n    outline: none;\n    border-bottom: 2px solid #214F81; }\n  div .invalid-feedback {\n    color: red;\n    font-size: 12px; }\n"

/***/ }),

/***/ "./src/app/components/timetable/newlesson/newlessonpopup.component.tpl.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/timetable/newlesson/newlessonpopup.component.tpl.ts ***!
  \********************************************************************************/
/*! exports provided: newLessonPopupTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newLessonPopupTemplate", function() { return newLessonPopupTemplate; });
var newLessonPopupTemplate = "\n<ngx-smart-modal #newLessonPopup [identifier]=\"'newLessonPopup'\">\n    <form name='lessonForm' (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\n        <div class=\"lesson-form-group\">\n            <label for=\"lessonnumber\">\u00F3rasz\u00E1m: </label>\n            <input type=\"number\" class=\"form-control\" name=\"lessonnumber\" [(ngModel)]=\"model.lessonnumber\"\n            #lessonnumber=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && lessonnumber.invalid }\" required/>\n            <div *ngIf=\"f.submitted && lessonnumber.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"lessonnumber.errors.required\">Add meg az e-mail c\u00EDmed!</div>\n            </div>\n        </div>\n        <div class=\"lesson-form-group\">\n            <label for=\"date\">D\u00E1tum: </label>\n            <input placeholder=\"D\u00E1tum\" [owlDateTimeTrigger]=\"dt2\" [owlDateTime]=\"dt2\" class=\"form-control\" name=\"date\"\n            [(ngModel)]=\"model.date\" #date=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && date.invalid }\" required />\n            <owl-date-time [pickerType]=\"'calendar'\" #dt2></owl-date-time>\n            <div *ngIf=\"f.submitted && date.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"date.errors.required\">Add meg az e-mail c\u00EDmed!</div>\n            </div>\n        </div>\n        <div class=\"lesson-form-group\">\n            <label for=\"time\">Id\u0151pont: </label>\n            <input placeholder=\"Id\u0151\" [owlDateTimeTrigger]=\"dt1\" [owlDateTime]=\"dt1\" class=\"form-control\" name=\"time\"\n            [(ngModel)]=\"model.time\" #time=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && time.invalid }\" required/>\n            <owl-date-time [pickerType]=\"'timer'\" #dt1></owl-date-time>\n            <div *ngIf=\"f.submitted && time.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"time.errors.required\">Add meg az e-mail c\u00EDmed!</div>\n            </div>\n        </div>\n        <div class=\"lesson-form-group\">\n            <label for=\"location\">Helysz\u00EDn: </label>\n            <input type=\"text\" class=\"form-control\" name=\"location\" [(ngModel)]=\"model.location\"\n            #location=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && location.invalid }\" required/>\n            <div *ngIf=\"f.submitted && location.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"location.errors.required\">Add meg az e-mail c\u00EDmed!</div>\n            </div>\n        </div>\n        <div class=\"lesson-form-group\">\n            <label for=\"subject\">Tant\u00E1rgy: </label>\n            <input type=\"text\" class=\"form-control\" name=\"subject\" [(ngModel)]=\"model.subject\"\n            #subject=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && subject.invalid }\" required/>\n            <div *ngIf=\"f.submitted && subject.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"subject.errors.required\">Add meg az e-mail c\u00EDmed!</div>\n            </div>\n        </div>\n        <div class=\"lesson-form-group\">\n            <label for=\"topic\">T\u00E9ma: </label>\n            <input type=\"text\" class=\"form-control\" name=\"topic\" [(ngModel)]=\"model.topic\"\n            #topic=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && topic.invalid }\" required/>\n            <div *ngIf=\"f.submitted && topic.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"topic.errors.required\">Add meg az e-mail c\u00EDmed!</div>\n            </div>\n        </div>\n        <div class=\"lesson-form-group\">\n            <label for=\"comment\">Megjegyz\u00E9s: </label>\n            <textarea maxlength=\"255\" class=\"form-control\" name=\"comment\" [(ngModel)]=\"model.comment\"\n            #comment=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && comment.invalid }\" required></textarea>\n            <div *ngIf=\"f.submitted && comment.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"comment.errors.required\">Add meg az e-mail c\u00EDmed!</div>\n            </div>\n        </div>\n        <div class=\"lesson-form-group\">\n            <button [disabled]=\"loading\">Ment\u00E9s</button>\n        </div>\n    </form>\n    <button type=\"button\" (click)=\"newLessonPopup.close()\">M\u00E9gsem</button>\n</ngx-smart-modal>\n";


/***/ }),

/***/ "./src/app/components/timetable/newlesson/newlessonpopup.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/timetable/newlesson/newlessonpopup.component.ts ***!
  \****************************************************************************/
/*! exports provided: NewLessonPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLessonPopupComponent", function() { return NewLessonPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _newlessonpopup_component_tpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newlessonpopup.component.tpl */ "./src/app/components/timetable/newlesson/newlessonpopup.component.tpl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewLessonPopupComponent = /** @class */ (function () {
    function NewLessonPopupComponent(http) {
        this.http = http;
        this.model = [];
    }
    NewLessonPopupComponent.prototype.onSubmit = function () {
        console.log(this.model);
        this.model.date = this.model.date.getMonth() + '/' + this.model.date.getDate() + '/' + this.model.date.getFullYear();
        this.model.time = this.model.time.getHours() + ':' + this.model.time.getMinutes();
        // this.http.post('/register', this.model, {responseType: 'text'}).subscribe(status => console.log(status); newLessonPopup.close());
    };
    NewLessonPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newlesson-popup',
            template: _newlessonpopup_component_tpl__WEBPACK_IMPORTED_MODULE_2__["newLessonPopupTemplate"],
            styles: [__webpack_require__(/*! ./newlessonpopup.component.scss */ "./src/app/components/timetable/newlesson/newlessonpopup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewLessonPopupComponent);
    return NewLessonPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/timetable/timetable.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/timetable/timetable.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-spacing: 0px; }\n  table th, table td {\n    text-align: center;\n    padding: 5px 10px;\n    height: 40px; }\n  table th {\n    background-color: #214F81;\n    color: white; }\n  table tr:nth-child(even) {\n    background-color: #CEDFF2; }\n  table input {\n    max-width: 100px; }\n"

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
var timetableTemplate = "\n<app-newlesson-popup></app-newlesson-popup>\n<div>\n    <div>\n        Sz\u0171r\u00E9s:\n        <select [(ngModel)]=\"actualMentor\">\n            <option>Mentor</option>\n            <option *ngFor=\"let mentor of allmentors\">{{mentor}}</option>\n        </select>\n    </div>\n    <table>\n        <thead>\n            <th>Mentor</th>\n            <th>Mentor\u00E1lt</th>\n            <th>\u00D3rasz\u00E1m</th>\n            <th>D\u00E1tum</th>\n            <th>Id\u0151pont</th>\n            <th>Helysz\u00EDn</th>\n            <th>Tant\u00E1rgy</th>\n            <th>T\u00E9ma</th>\n            <th>Megjegyz\u00E9s</th>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let lesson of getCorrectMentors(); let i=index\">\n            <td><input [(ngModel)]=\"lesson.mentorName\" [disabled]=\"i !== editableRow\"></td>\n            <td><input [(ngModel)]=\"lesson.mentoeeName\" [disabled]=\"i !== editableRow\"></td>\n            <td><input [(ngModel)]=\"lesson.lessonnumber\" [disabled]=\"i !== editableRow\"></td>\n            <td><input [(ngModel)]=\"lesson.date\" [disabled]=\"i !== editableRow\"></td>\n            <td><input [(ngModel)]=\"lesson.time\" [disabled]=\"i !== editableRow\"></td>\n            <td><input [(ngModel)]=\"lesson.location\" [disabled]=\"i !== editableRow\"></td>\n            <td><input [(ngModel)]=\"lesson.subject\" [disabled]=\"i !== editableRow\"></td>\n            <td><input [(ngModel)]=\"lesson.topic\" [disabled]=\"i !== editableRow\"></td>\n            <td><input [(ngModel)]=\"lesson.comment\" [disabled]=\"i !== editableRow\"></td>\n            <p *ngIf=\"i !== editableRow\" (click)=\"editRow(lesson, i)\">Edit</p>\n            <p *ngIf=\"i === editableRow\" (click)=\"saveModification(lesson)\">Ment\u00E9s</p>\n            <p *ngIf=\"i === editableRow\" (click)=\"cancelModification(i)\">M\u00E9gse</p>\n        <tr>\n        </tbody>\n    </table>\n    <button type=\"button\" (click)=\"newAppointment()\">\u00DAj \u00F3ra</button>\n</div>\n";


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
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
    function TimetableComponent(ngxSmartModalService, http) {
        var _this = this;
        this.ngxSmartModalService = ngxSmartModalService;
        this.http = http;
        this.allmentors = [];
        this.actualMentor = 'Mentor';
        this.editableRow = -1;
        this.modifiedRow = { lessonnumber: '', date: '', time: '', location: '', subject: '', topic: '', comment: '', menteeName: '' };
        this.http.get('/testtimetable').subscribe(function (result) {
            _this.lessons = result;
            _this.allmentors = Array.from(new Set(_this.lessons.map(function (l) { return l.mentorName; })));
        });
    }
    TimetableComponent.prototype.newAppointment = function () {
        this.ngxSmartModalService.getModal('newLessonPopup').open();
    };
    TimetableComponent.prototype.getCorrectMentors = function () {
        var _this = this;
        if (this.actualMentor === 'Mentor') {
            return this.lessons;
        }
        else {
            return this.lessons.filter(function (l) { return l.mentorName === _this.actualMentor; });
        }
    };
    TimetableComponent.prototype.editRow = function (lesson, index) {
        this.modifiedRow.lessonnumber = lesson.lessonnumber;
        this.modifiedRow.date = lesson.date;
        this.modifiedRow.time = lesson.time;
        this.modifiedRow.location = lesson.location;
        this.modifiedRow.subject = lesson.subject;
        this.modifiedRow.topic = lesson.topic;
        this.modifiedRow.comment = lesson.comment;
        this.modifiedRow.menteeName = lesson.menteeName;
        this.editableRow = index;
    };
    TimetableComponent.prototype.saveModification = function (lesson) {
        this.editableRow = -1;
        console.log(lesson);
        // this.http.post('/?', lesson, {responseType: 'text'}).subscribe(status => console.log(status));
    };
    TimetableComponent.prototype.cancelModification = function (index) {
        this.lessons[index].lessonnumber = this.modifiedRow.lessonnumber;
        this.lessons[index].date = this.modifiedRow.date;
        this.lessons[index].time = this.modifiedRow.time;
        this.lessons[index].location = this.modifiedRow.location;
        this.lessons[index].subject = this.modifiedRow.subject;
        this.lessons[index].topic = this.modifiedRow.topic;
        this.lessons[index].comment = this.modifiedRow.comment;
        this.lessons[index].menteeName = this.modifiedRow.menteeName;
        this.editableRow = -1;
    };
    TimetableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timetable',
            template: _timetable_component_tpl__WEBPACK_IMPORTED_MODULE_1__["timetableTemplate"],
            styles: [__webpack_require__(/*! ./timetable.component.scss */ "./src/app/components/timetable/timetable.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__["NgxSmartModalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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

module.exports = __webpack_require__(/*! /home/szi/Documents/lathatatlan_iskola/rft-project/rftfrontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map