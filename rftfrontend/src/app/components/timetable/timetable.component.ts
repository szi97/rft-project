import { Component } from '@angular/core';
import { timetableTemplate } from './timetable.component.tpl';
import { HttpClient } from '@angular/common/http';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-timetable',
    template: timetableTemplate,
    styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent {
    lessons: any;

    constructor(public ngxSmartModalService: NgxSmartModalService, private http: HttpClient) {
        this.http.get('/testtimetable').subscribe(result => {this.lessons = result; });
    }

    newAppointment() {
        this.ngxSmartModalService.getModal('newLessonPopup').open();
    }
}
