import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {registrationTemplate} from './registration.component.tpl';

@Component({
    selector: 'app-registration',
    template: registrationTemplate,
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

    model: any = {};

    onSubmit() {
        console.log(this.model);
    }
}
