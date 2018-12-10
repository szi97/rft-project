import { Component } from '@angular/core';
import {mentorsPopupTemplate} from './mentorspopup.component.tpl';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mentors-popup',
  template: mentorsPopupTemplate,
  styleUrls: ['./mentorspopup.component.scss']
})
export class MentorsPopupComponent {
  mentor: any;

  constructor(private http: HttpClient) {
    this.http.get('/menetrend').subscribe(result => { console.log(this.mentor); });
 }
}
