"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var editEventPopup_component_tpl_1 = require("./editEventPopup.component.tpl");
var common_1 = require("@angular/common");
var EditEventPopupComponent = /** @class */ (function () {
    function EditEventPopupComponent(ngxSmartModalService, datepipe, http) {
        this.ngxSmartModalService = ngxSmartModalService;
        this.datepipe = datepipe;
        this.http = http;
    }
    EditEventPopupComponent.prototype.saveEvent = function () {
        /*event.date = this.datepipe.transform(event.date, 'yyyy-MM-dd');
        event.time = this.datepipe.transform(event.time, 'HH:mm:00');
        event.organizers = ['Béla', 'Kati'];*/
        var _this = this;
        this.modifiedEvent = this.ngxSmartModalService.getModalData('editEventPopup');
        this.modifiedEvent.date = this.datepipe.transform(this.modifiedEvent.date, 'yyyy-MM-dd');
        this.modifiedEvent.time = this.datepipe.transform(this.modifiedEvent.time, 'HH:mm:00');
        this.modifiedEvent.organizers = [];
        delete this.modifiedEvent['organizer'];
        this.http.post('/saveExistingEvent', this.modifiedEvent, { responseType: 'text' }).subscribe(function (status) {
            console.log(status);
            location.reload();
            _this.ngxSmartModalService.getModal('editEventPopup').close();
        });
    };
    EditEventPopupComponent.prototype.ngAfterViewInit = function () {
        var data = this.ngxSmartModalService.getModalData('editEventPopup');
        this.modifiedEvent.name = data.name;
        this.modifiedEvent.date = data.date;
        this.modifiedEvent.time = data.time;
        this.modifiedEvent.location = data.location;
        this.modifiedEvent.description = data.description;
        this.modifiedEvent.organizers = data.organizers;
        console.log('MODIFIED');
        console.log(this.modifiedEvent);
    };
    EditEventPopupComponent.prototype.cancelEdit = function () {
        this.ngxSmartModalService.getModal('editEventPopup').close();
        // this.ngxSmartModalService.setModalData(this.modifiedEvent, 'editEventPopup', true);
    };
    EditEventPopupComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-event-popup',
            template: editEventPopup_component_tpl_1.editEventPopupTemplate,
            styleUrls: ['./editEventPopup.component.scss'],
            providers: [common_1.DatePipe]
        })
    ], EditEventPopupComponent);
    return EditEventPopupComponent;
}());
exports.EditEventPopupComponent = EditEventPopupComponent;
//# sourceMappingURL=editEventPopup.component.js.map