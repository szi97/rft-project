import { Component } from '@angular/core';
import {logouttemplate} from './logout.component.tpl';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logout',
  template: logouttemplate,
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  model: any = {};

  constructor(private http: HttpClient) {

  }

  onSubmit() {
    console.log(this.model);
   // this.http.post('/register', this.model, {responseType: 'text'}).subscribe(status => console.log(status));
  }
}
