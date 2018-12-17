"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var registration_component_tpl_1 = require("./registration.component.tpl");
var common_1 = require("@angular/common");
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(http) {
        this.http = http;
        this.model = new Model('', '', '', '', '', [], []);
        this.subjectList = [
            'Magyar irodalom és nyelvtan', 'Angol', 'Német', 'Földrajz', 'Kémia', 'Fizika', 'Történelem', 'Infomatika', 'Biológia', 'Matematika'
        ];
        this.agegroupList = [
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
            this.model.subjectList.push(subject);
        }
        else {
            this.model.subjectList.splice(this.model.subjectList.indexOf(subject), 1);
        }
    };
    RegistrationComponent.prototype.updateCheckedAgegroups = function (agegroup, event) {
        if (event.target.checked) {
            this.model.agegroupList.push(agegroup);
        }
        else {
            this.model.agegroupList.splice(this.model.agegroupList.indexOf(agegroup), 1);
        }
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-registration',
            template: registration_component_tpl_1.registrationTemplate,
            styleUrls: ['./registration.component.scss'],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/regisztracio' }]
        })
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
var Model = /** @class */ (function () {
    function Model(email1, password1, name1, phone1, facebook1, agegroup1, subject1) {
        this.email = email1;
        this.password = password1;
        this.name = name1;
        this.phone = phone1;
        this.facebook = facebook1;
        this.subjectList = subject1;
        this.agegroupList = agegroup1;
    }
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=registration.component.js.map