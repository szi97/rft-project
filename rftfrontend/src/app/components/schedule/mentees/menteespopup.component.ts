import { Component } from '@angular/core';
import {menteesPopupTemplate} from './menteespopup.component.tpl';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mentees-popup',
  template: menteesPopupTemplate,
  styleUrls: ['./menteespopup.component.scss']
})
export class MenteesPopupComponent {
  mentee: any;

  constructor(private http: HttpClient) {
    this.http.get('/menetrend').subscribe(result => { console.log(this.mentee); });
  }
}
