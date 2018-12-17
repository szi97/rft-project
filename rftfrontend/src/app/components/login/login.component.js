"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var login_component_tpl_1 = require("./login.component.tpl");
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
        core_1.Component({
            selector: 'app-login',
            template: login_component_tpl_1.logintemplate,
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map