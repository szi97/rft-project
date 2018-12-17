import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, FormArray } from '@angular/forms';
import {registrationTemplate} from './registration.component.tpl';
import {HttpClient} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-registration',
  template: registrationTemplate,
  styleUrls: ['./registration.component.scss'],
  providers: [{provide: APP_BASE_HREF, useValue: '/regisztracio'}]
})
export class RegistrationComponent {

  model = new Model( '' , '', '', '', '', [] , []);

  subjectList: any;
  agegroupList: any;

  constructor(private http: HttpClient) {
    this.subjectList = [
      'Magyar irodalom és nyelvtan', 'Angol', 'Német', 'Földrajz', 'Kémia', 'Fizika', 'Történelem', 'Infomatika', 'Biológia', 'Matematika'
    ];
    this.agegroupList = [
      'Általános iskola 1-4', 'Általános iskola 5-8', 'Középiskola 1. év', 'Középiskola 2. év',
      'Középiskola 3. év', 'Középiskola 4. év', 'Érettségi felkészítés'
    ];
  }

  onSubmit() {
    console.log(this.model);
    this.http.post('/register', this.model, {responseType: 'text'}).subscribe(status => console.log(status));
  }

  updateCheckedSubjects(subject, event) {
    if (event.target.checked) {
      this.model.subjectList.push(subject);
    } else {
      this.model.subjectList.splice(this.model.subjectList.indexOf(subject), 1 );
    }
  }

  updateCheckedAgegroups(agegroup, event) {
    if (event.target.checked) {
      this.model.agegroupList.push(agegroup);
    } else {
      this.model.agegroupList.splice(this.model.agegroupList.indexOf(agegroup), 1 );
    }
  }
}

export class Model {
  email: string;
  password: string;
  name: string;
  phone: string;
  facebook: string;
  subjectList: Array<String>;
  agegroupList: Array<String>;

  constructor(email1: string, password1: string, name1: string, phone1: string, facebook1: string,
              agegroup1: Array<String>, subject1: Array<String>) {
    this.email = email1;
    this.password = password1;
    this.name = name1;
    this.phone = phone1;
    this.facebook = facebook1;
    this.subjectList = subject1;
    this.agegroupList = agegroup1;
  }
}
