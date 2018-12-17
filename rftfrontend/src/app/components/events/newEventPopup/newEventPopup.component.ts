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

    newEvent = {name: '', date: '', time: '', location: '', description: '', organizers: []};
    allLeaders: any;

    constructor(public ngxSmartModalService: NgxSmartModalService, public datepipe: DatePipe, private http: HttpClient) {
      http.get('/getleaders').subscribe(result => this.allLeaders = result);
    }

    saveNewEvent() {
        this.newEvent.date = this.datepipe.transform(this.newEvent.date, 'yyyy-MM-dd');
        this.newEvent.time = this.datepipe.transform(this.newEvent.time, 'HH:mm:00');
        console.log(this.newEvent);
      this.http.post('/newEvent', this.newEvent, {responseType: 'text'}).subscribe(status => {
        console.log(status);
        location.reload();
        this.ngxSmartModalService.getModal('newEventPopup').close();
      });
    }

    updateLeaders(leader, event) {
      if (event.target.checked) {
        this.newEvent.organizers.push(leader.getName());
      } else {
        this.newEvent.organizers.splice(this.newEvent.organizers.indexOf(leader.getName()), 1 );
      }
    }

}
