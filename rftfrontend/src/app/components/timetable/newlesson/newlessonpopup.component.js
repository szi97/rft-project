"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var newlessonpopup_component_tpl_1 = require("./newlessonpopup.component.tpl");
var common_1 = require("@angular/common");
var NewLessonPopupComponent = /** @class */ (function () {
    function NewLessonPopupComponent(ngxSmartModalService, datepipe, http) {
        this.ngxSmartModalService = ngxSmartModalService;
        this.datepipe = datepipe;
        this.http = http;
        this.model = { mentorid: 1, menteeid: 1 };
    }
    NewLessonPopupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.model.mentorid = this.ngxSmartModalService.getModalData('newLessonPopup').mentorid;
        this.model.date = this.datepipe.transform(this.model.date, 'yyyy-MM-dd');
        this.model.time = this.datepipe.transform(this.model.time, 'HH:mm:00');
        this.http.post('/newTimetableRow', this.model, { responseType: 'text' }).subscribe(function (status) {
            console.log(status);
            location.reload();
            _this.ngxSmartModalService.getModal('newLessonPopup').close();
        });
    };
    NewLessonPopupComponent = __decorate([
        core_1.Component({
            selector: 'app-newlesson-popup',
            template: newlessonpopup_component_tpl_1.newLessonPopupTemplate,
            styleUrls: ['./newlessonpopup.component.scss'],
            providers: [common_1.DatePipe]
        })
    ], NewLessonPopupComponent);
    return NewLessonPopupComponent;
}());
exports.NewLessonPopupComponent = NewLessonPopupComponent;
//# sourceMappingURL=newlessonpopup.component.js.map