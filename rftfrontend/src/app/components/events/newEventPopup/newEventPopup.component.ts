import { Component } from '@angular/core';
import {newEventPopupTemplate} from './newEventPopup.component.tpl';
import { HttpClient } from '@angular/common/http';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-event-popup',
  template: newEventPopupTemplate,
  styleUrls: ['./newEventPopup.component.scss'],
  providers: [DatePipe]
})
export class NewEventPopupComponent {

    newEvent = {name: '', date: '', time: '', location: '', description: '', organizers: ['Béla', 'Kati']};

    constructor(public ngxSmartModalService: NgxSmartModalService, public datepipe: DatePipe, private http: HttpClient) {

    }

    saveNewEvent() {
        this.newEvent.date = this.datepipe.transform(this.newEvent.date, 'yyyy-MM-dd');
        this.newEvent.time = this.datepipe.transform(this.newEvent.date, 'yyyy-MM-dd');
        console.log(this.newEvent);
        this.http.post('/?', this.newEvent, {responseType: 'text'}).subscribe(status => {
            console.log(status);
            this.ngxSmartModalService.getModal('newEventPopup').close();
        });
    }

}
