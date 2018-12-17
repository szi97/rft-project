"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var newEventPopup_component_tpl_1 = require("./newEventPopup.component.tpl");
var common_1 = require("@angular/common");
var NewEventPopupComponent = /** @class */ (function () {
    function NewEventPopupComponent(ngxSmartModalService, datepipe, http) {
        var _this = this;
        this.ngxSmartModalService = ngxSmartModalService;
        this.datepipe = datepipe;
        this.http = http;
        this.newEvent = { name: '', date: '', time: '', location: '', description: '', organizers: [] };
        http.get('/getleaders').subscribe(function (result) { return _this.allLeaders = result; });
    }
    NewEventPopupComponent.prototype.saveNewEvent = function () {
        var _this = this;
        this.newEvent.date = this.datepipe.transform(this.newEvent.date, 'yyyy-MM-dd');
        this.newEvent.time = this.datepipe.transform(this.newEvent.time, 'HH:mm:00');
        console.log(this.newEvent);
        this.http.post('/newEvent', this.newEvent, { responseType: 'text' }).subscribe(function (status) {
            console.log(status);
            location.reload();
            _this.ngxSmartModalService.getModal('newEventPopup').close();
        });
    };
    NewEventPopupComponent.prototype.updateLeaders = function (leader, event) {
        if (event.target.checked) {
            this.newEvent.organizers.push(leader.getName());
        }
        else {
            this.newEvent.organizers.splice(this.newEvent.organizers.indexOf(leader.getName()), 1);
        }
    };
    NewEventPopupComponent = __decorate([
        core_1.Component({
            selector: 'app-new-event-popup',
            template: newEventPopup_component_tpl_1.newEventPopupTemplate,
            styleUrls: ['./newEventPopup.component.scss'],
            providers: [common_1.DatePipe]
        })
    ], NewEventPopupComponent);
    return NewEventPopupComponent;
}());
exports.NewEventPopupComponent = NewEventPopupComponent;
//# sourceMappingURL=newEventPopup.component.js.map