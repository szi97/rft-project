"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ngx_smart_modal_1 = require("ngx-smart-modal");
var forms_1 = require("@angular/forms");
var ng_pick_datetime_1 = require("ng-pick-datetime");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./components/app/app.component");
var home_component_1 = require("./components/home/home.component");
var app_routing_module_1 = require("./app-routing.module");
var schedule_component_1 = require("./components/schedule/schedule.component");
var mentorspopup_component_1 = require("./components/schedule/mentors/mentorspopup.component");
var registration_component_1 = require("./components/registration/registration.component");
var timetable_component_1 = require("./components/timetable/timetable.component");
var login_component_1 = require("./components/login/login.component");
var menteespopup_component_1 = require("./components/schedule/mentees/menteespopup.component");
var insitutionspopup_component_1 = require("./components/schedule/institutions/insitutionspopup.component");
var http_1 = require("@angular/common/http");
var newlessonpopup_component_1 = require("./components/timetable/newlesson/newlessonpopup.component");
var event_component_1 = require("./components/events/event.component");
var newEventPopup_component_1 = require("./components/events/newEventPopup/newEventPopup.component");
var editEventPopup_component_1 = require("./components/events/editEventPopup/editEventPopup.component");
var AppModule = /** @class */ (function () {
    function AppModule(router) {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                schedule_component_1.ScheduleComponent,
                mentorspopup_component_1.MentorsPopupComponent,
                menteespopup_component_1.MenteesPopupComponent,
                insitutionspopup_component_1.InstitutionsPopupComponent,
                registration_component_1.RegistrationComponent,
                timetable_component_1.TimetableComponent,
                newlessonpopup_component_1.NewLessonPopupComponent,
                login_component_1.LoginComponent,
                event_component_1.EventComponent,
                newEventPopup_component_1.NewEventPopupComponent,
                editEventPopup_component_1.EditEventPopupComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ngx_smart_modal_1.NgxSmartModalModule.forRoot(),
                forms_1.FormsModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                ng_pick_datetime_1.OwlDateTimeModule,
                ng_pick_datetime_1.OwlNativeDateTimeModule,
                animations_1.BrowserAnimationsModule
            ],
            providers: [ngx_smart_modal_1.NgxSmartModalService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map