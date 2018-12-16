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
      this.model = [];
  }

  onSubmit() {
    console.log(this.model);
    this.model.date = this.model.date.getMonth() + '/' + this.model.date.getDate() + '/' + this.model.date.getFullYear();
    this.model.time = this.model.time.getHours() + ':' + this.model.time.getMinutes();
    // this.http.post('/register', this.model, {responseType: 'text'}).subscribe(status => {
    //  console.log(status); this.ngxSmartModalService.getModal('newLessonPopup').close(); });
  }
}
