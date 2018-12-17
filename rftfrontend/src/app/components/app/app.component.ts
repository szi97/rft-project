import { Component, OnInit } from '@angular/core';
import {apptemplate} from './app.component.tpl';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: apptemplate,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  actualUser: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('/testuserrole').subscribe(result => {this.actualUser = result; console.log(this.actualUser); });
  }

}
