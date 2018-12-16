import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { eventTemplate } from './event.component.tpl';

@Component({
    selector: 'app-events',
    template: eventTemplate,
    styleUrls: ['./event.component.scss']
})
export class EventComponent {

    events: any;

    constructor(http: HttpClient) {
        http.get('/events').subscribe(result => (this.events = result));
    }
}
