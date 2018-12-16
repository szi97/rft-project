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
        http.get('/events').subscribe(result => (this.events = result));
    }

    createNewEvent() {
        this.ngxSmartModalService.getModal('newEventPopup').open();
    }

    editEvent(event: any) {
        this.ngxSmartModalService.getModal('editEventPopup').open();
        this.ngxSmartModalService.setModalData(event, 'editEventPopup', true);

    }
}
