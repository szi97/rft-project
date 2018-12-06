import { Component } from '@angular/core';
import {logintemplate} from './login.component.tpl';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  template: logintemplate,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  model: any = {};

  constructor(private http: HttpClient) {

  }

  onSubmit() {
    console.log(this.model);
   //  this.http.post('/register', this.model, {responseType: 'text'}).subscribe(status => console.log(status));
  }
}
