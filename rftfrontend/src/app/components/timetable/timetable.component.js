"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var timetable_component_tpl_1 = require("./timetable.component.tpl");
var TimetableComponent = /** @class */ (function () {
    function TimetableComponent(ngxSmartModalService, http) {
        var _this = this;
        this.ngxSmartModalService = ngxSmartModalService;
        this.http = http;
        this.allmentors = [];
        this.actualMentor = 'Mentor';
        this.editableRow = -1;
        this.modifiedRow = { lessonnumber: '', date: '', time: '', location: '', subject: '', topic: '', comment: '', menteeName: '', menteeid: 0 };
        this.http.get('/testtimetable').subscribe(function (result) {
            _this.lessons = result;
            _this.allmentors = Array.from(new Set(_this.lessons.map(function (l) { return l.mentorName; })));
        });
        this.http.get('/testmentee').subscribe(function (result) { return _this.allMentees = result; });
        this.http.get('/testuserrole').subscribe(function (result) { return _this.actualUserrole = result; });
        this.http.get('/getactualuser').subscribe(function (result) { return _this.actualUser = result; });
    }
    TimetableComponent.prototype.newAppointment = function () {
        this.ngxSmartModalService.getModal('newLessonPopup').open();
        this.ngxSmartModalService.
            setModalData({ mentorName: this.lessons[0].mentorName, mentorid: this.lessons[0].mentorid }, 'newLessonPopup', true);
    };
    TimetableComponent.prototype.getCorrectMentors = function () {
        var _this = this;
        if (this.actualMentor === 'Mentor') {
            console.log(this.lessons);
            return this.lessons;
        }
        else {
            console.log(this.lessons.filter(function (l) { return l.mentorName === _this.actualMentor; }));
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
        this.modifiedRow.menteeid = lesson.menteeid;
        this.editableRow = index;
    };
    TimetableComponent.prototype.SetNewContactMentee = function (index) {
        this.lessons[this.editableRow].menteeid = this.allMentees[index].menteeid;
    };
    TimetableComponent.prototype.saveModification = function (lesson) {
        this.editableRow = -1;
        console.log(lesson);
        this.http.post('/saveExistingTimetableRow', lesson, { responseType: 'text' }).subscribe(function (status) { return console.log(status); });
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
        this.lessons[index].menteeid = this.modifiedRow.menteeid;
        this.editableRow = -1;
    };
    TimetableComponent.prototype.checkRole = function (lesson) {
        if (this.actualUser) {
            return this.actualUser.id === lesson.mentorid;
        }
        else {
            return this.actualUserrole[0] === true;
        }
    };
    TimetableComponent = __decorate([
        core_1.Component({
            selector: 'app-timetable',
            template: timetable_component_tpl_1.timetableTemplate,
            styleUrls: ['./timetable.component.scss']
        })
    ], TimetableComponent);
    return TimetableComponent;
}());
exports.TimetableComponent = TimetableComponent;
//# sourceMappingURL=timetable.component.js.map