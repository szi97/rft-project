"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var home_component_1 = require("./components/home/home.component");
var schedule_component_1 = require("./components/schedule/schedule.component");
var registration_component_1 = require("./components/registration/registration.component");
var timetable_component_1 = require("./components/timetable/timetable.component");
var login_component_1 = require("./components/login/login.component");
var event_component_1 = require("./components/events/event.component");
exports.appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'menetrend', component: schedule_component_1.ScheduleComponent },
    { path: 'regisztracio', component: registration_component_1.RegistrationComponent },
    { path: 'orarend', component: timetable_component_1.TimetableComponent },
    { path: 'bejelentkezes', component: login_component_1.LoginComponent },
    { path: 'esemenyek', component: event_component_1.EventComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(exports.appRoutes, { useHash: true })
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map