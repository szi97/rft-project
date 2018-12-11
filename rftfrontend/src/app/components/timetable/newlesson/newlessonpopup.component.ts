import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newLessonPopupTemplate } from './newlessonpopup.component.tpl';

@Component({
  selector: 'app-newlesson-popup',
  template: newLessonPopupTemplate,
  styleUrls: ['./newlessonpopup.component.scss']
})
export class NewLessonPopupComponent {
  model: any;

  constructor(private http: HttpClient) {
      this.model = [];
  }

  onSubmit() {
    console.log(this.model);
    // this.http.post('/register', this.model, {responseType: 'text'}).subscribe(status => console.log(status));

  }
}
