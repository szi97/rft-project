import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newLessonPopupTemplate } from './newlessonpopup.component.tpl';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-newlesson-popup',
  template: newLessonPopupTemplate,
  styleUrls: ['./newlessonpopup.component.scss'],
  providers: [DatePipe]
})
export class NewLessonPopupComponent {
  model: any;

  constructor(public ngxSmartModalService: NgxSmartModalService, public datepipe: DatePipe, private http: HttpClient) {
      this.model = {mentorid: 1, menteeid: 1};
  }

  onSubmit() {
    this.model.date = this.datepipe.transform(this.model.date, 'yyyy-MM-dd');
    this.model.time = this.datepipe.transform(this.model.time, 'HH:mm:00');
    this.http.post('/register', this.model, {responseType: 'text'}).subscribe(status => {
      console.log(status);
      this.ngxSmartModalService.getModal('newLessonPopup').close();
    });
  }
}
