import { Component } from '@angular/core';
import {logintemplate} from './login.component.tpl';

@Component({
  selector: 'app-login',
  template: logintemplate,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  model: any = {};

  onSubmit() {
    console.log(this.model);
  }
}
