import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, FormArray } from '@angular/forms';
import {registrationTemplate} from './registration.component.tpl';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  template: registrationTemplate,
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  model = new Model( '' , '', '', '', '', [] , []);

  subjects: any;
  agegroups: any;

  constructor(private http: HttpClient) {
    this.subjects = [
      'Magyar irodalom és nyelvtan', 'Angol', 'Német', 'Földrajz', 'Kémia', 'Fizika', 'Történelem', 'Infomatika', 'Biológia', 'Matematika'
    ];
    this.agegroups = [
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
      this.model.subjects.push(subject);
    } else {
      this.model.subjects.splice(this.model.subjects.indexOf(subject), 1 );
    }
  }

  updateCheckedAgegroups(agegroup, event) {
    if (event.target.checked) {
      this.model.agegroups.push(agegroup);
    } else {
      this.model.agegroups.splice(this.model.agegroups.indexOf(agegroup), 1 );
    }
  }
}

export class Model {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  facebook: string;
  subjects: Array<String>;
  agegroups: Array<String>;

  constructor(email1: string, password1: string, name1: string, phone1: string, facebook1: string,
              agegroup1: Array<String>, subject1: Array<String>) {
    this.email = email1;
    this.password = password1;
    this.name = name1;
    this.phoneNumber = phone1;
    this.facebook = facebook1;
    this.subjects = subject1;
    this.agegroups = agegroup1;
  }
}
