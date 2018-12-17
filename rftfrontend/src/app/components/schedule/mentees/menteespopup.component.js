"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var menteespopup_component_tpl_1 = require("./menteespopup.component.tpl");
var MenteesPopupComponent = /** @class */ (function () {
    function MenteesPopupComponent() {
    }
    MenteesPopupComponent = __decorate([
        core_1.Component({
            selector: 'app-mentees-popup',
            template: menteespopup_component_tpl_1.menteesPopupTemplate,
            styleUrls: ['./menteespopup.component.scss']
        })
    ], MenteesPopupComponent);
    return MenteesPopupComponent;
}());
exports.MenteesPopupComponent = MenteesPopupComponent;
//# sourceMappingURL=menteespopup.component.js.map