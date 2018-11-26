import { Component } from '@angular/core';
import {apptemplate} from './app.component.tpl';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-root',
  template: apptemplate,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
