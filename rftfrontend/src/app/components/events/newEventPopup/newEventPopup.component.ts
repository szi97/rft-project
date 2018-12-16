import { Component } from '@angular/core';
import {newEventPopupTemplate} from './newEventPopup.component.tpl';
import { HttpClient } from '@angular/common/http';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-new-event-popup',
  template: newEventPopupTemplate,
  styleUrls: ['./newEventPopup.component.scss']
})
export class NewEventPopupComponent {

    newEvent = {name: '', date: '', time: '', location: '', description: '', organizers: ['Béla', 'Kati']};

    constructor(public ngxSmartModalService: NgxSmartModalService, private http: HttpClient) {

    }

    saveNewEvent() {
        console.log(this.newEvent);
      /*  this.http.post('/?', event, {responseType: 'text'}).subscribe(status => {
            console.log(status);
            this.ngxSmartModalService.getModal('newEventPopup').close();
        });
        */
    }

}
