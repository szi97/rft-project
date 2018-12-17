"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var event_component_tpl_1 = require("./event.component.tpl");
var EventComponent = /** @class */ (function () {
    function EventComponent(ngxSmartModalService, http) {
        var _this = this;
        this.ngxSmartModalService = ngxSmartModalService;
        this.http = http;
        http.get('/events').subscribe(function (result) {
            _this.events = result;
            _this.events.forEach(function (element) {
                var time = element.time.split(':');
                var date = new Date();
                date.setHours(time[0]);
                date.setMinutes(time[1]);
                date.setSeconds(time[2]);
                element.time = date;
            });
        });
    }
    EventComponent.prototype.createNewEvent = function () {
        this.ngxSmartModalService.getModal('newEventPopup').open();
    };
    EventComponent.prototype.editEvent = function (actualEvent) {
        this.ngxSmartModalService.getModal('editEventPopup').open();
        this.ngxSmartModalService.setModalData(actualEvent, 'editEventPopup', true);
    };
    EventComponent = __decorate([
        core_1.Component({
            selector: 'app-events',
            template: event_component_tpl_1.eventTemplate,
            styleUrls: ['./event.component.scss']
        })
    ], EventComponent);
    return EventComponent;
}());
exports.EventComponent = EventComponent;
//# sourceMappingURL=event.component.js.map