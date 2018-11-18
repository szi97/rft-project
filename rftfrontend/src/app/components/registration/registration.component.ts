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
/*    registerForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            telefonszam: ['', [Validators.required, ]],
            facebook: ['', [Validators.required, ]],
            tantargy: ['', [Validators.required, ]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
*/
    onSubmit() {

    }
}
