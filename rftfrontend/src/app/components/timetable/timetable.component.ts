import { Component } from '@angular/core';
import { timetableTemplate } from './timetable.component.tpl';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-timetable',
    template: timetableTemplate,
    styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent {
    lessons: any;

    constructor(private http: HttpClient) {
        this.http.get('/testtimetable').subscribe(result => {this.lessons = result; });
    }
}
