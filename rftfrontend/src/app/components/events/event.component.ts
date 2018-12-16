import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { eventTemplate } from './event.component.tpl';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-events',
    template: eventTemplate,
    styleUrls: ['./event.component.scss']
})
export class EventComponent {

    events: any;

    constructor(public ngxSmartModalService: NgxSmartModalService, private http: HttpClient) {
        http.get('/events').subscribe(result => {
            this.events = result;
            this.events.forEach(element => {
                const time = element.time.split(':');
                const date = new Date();
                date.setHours(time[0]);
                date.setMinutes(time[1]);
                date.setSeconds(time[2]);
                element.time = date;
            });
        });
    }

    createNewEvent() {
        this.ngxSmartModalService.getModal('newEventPopup').open();
    }

    editEvent(actualEvent: any) {
        this.ngxSmartModalService.getModal('editEventPopup').open();
        this.ngxSmartModalService.setModalData(actualEvent, 'editEventPopup', true);

    }
}
