"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var schedule_component_tpl_1 = require("./schedule.component.tpl");
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
        this.http.get('/getactualuser').subscribe(function (result) { return _this.actualUser = result; });
        this.http.get('/menetrend').subscribe(function (result) { return _this.contacts = result; });
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
        this.http.post('/newScheduleRow', this.newContact, { responseType: 'text' }).subscribe(function (status) { return console.log(status); });
        this.contacts.push(this.newContact);
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
        this.http.post('/saveExistingScheduleRow', contact, { responseType: 'text' }).subscribe(function (status) { return console.log(status); });
    };
    ScheduleComponent.prototype.cancelModification = function (index) {
        this.contacts[index].mentorName = this.modifiedRow.mentorName;
        this.contacts[index].menteeName = this.modifiedRow.menteeName;
        this.contacts[index].institutionName = this.modifiedRow.institutionName;
        this.contacts[index].folderLink = this.modifiedRow.folderLink;
        this.editableRow = -1;
    };
    ScheduleComponent = __decorate([
        core_1.Component({
            selector: 'app-schedule',
            template: schedule_component_tpl_1.scheduletemplate,
            styleUrls: ['./schedule.component.scss']
        })
    ], ScheduleComponent);
    return ScheduleComponent;
}());
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=schedule.component.js.map