import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {registrationTemplate} from './registration.component.tpl';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-registration',
  template: registrationTemplate,
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(private http: HttpClient) {
  }



  model: any = {};

  /*onSubmit() {
      /!*console.log(this.model);*!/
    return this.http.post<Mentor>("/register", mentor);
  }*/

  onSubmit(model: Model){
    this.http.post('/register', model).subscribe(status=> console.log(JSON.stringify(status)));
  }
}

export class Model{
  email: string;
  password: string;
  name: string;
  phone: string;
  facebook: string;
  subject: string;

  constructor(email1: string, password1: string, name1: string, phone1: string, facebook1: string, subject1: string) {
    this.email = email1;
    this.password = password1;
    this.name = name1;
    this.phone = phone1;
    this.facebook = facebook1;
    this.subject = subject1;
  }
}
