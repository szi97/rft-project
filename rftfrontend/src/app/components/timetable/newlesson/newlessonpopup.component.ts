import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newLessonPopupTemplate } from './newlessonpopup.component.tpl';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-newlesson-popup',
  template: newLessonPopupTemplate,
  styleUrls: ['./newlessonpopup.component.scss']
})
export class NewLessonPopupComponent {
  model: any;

  constructor(public ngxSmartModalService: NgxSmartModalService, private http: HttpClient) {
      this.model = {mentorid: 1, menteeid: 1};
  }

  onSubmit() {
    let temp = this.model.date.getFullYear() + '-';
    if (this.model.date.getMonth() + 1 < 10) {
      temp += '0' + this.model.date.getMonth() + 1 + '-';
    } else {
      temp += this.model.date.getMonth() + '-';
    }

    if (this.model.date.getDate() < 10) {
      temp += '0' + this.model.date.getDate();
    } else {
      temp += this.model.date.getDate();
    }

    this.model.date = temp;
//    this.model.date = this.model.date.getFullYear() + '-' + this.model.date.getMonth() + 1 + '-' + this.model.date.getDate();

    if (this.model.time.getMinutes() < 10) {
      this.model.time = this.model.time.getHours() + ':0' + this.model.time.getMinutes() + ':00';
    } else {
      this.model.time = this.model.time.getHours() + ':' + this.model.time.getMinutes() + ':00';
    }

    console.log(this.model);
    this.http.post('/register', this.model, {responseType: 'text'}).subscribe(status => {
      console.log(status);
      this.ngxSmartModalService.getModal('newLessonPopup').close();
    });
  }
}
