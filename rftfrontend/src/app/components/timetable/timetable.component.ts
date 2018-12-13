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
    allmentors = [];
    actualMentor: String = 'Mentor' ;

    constructor(public ngxSmartModalService: NgxSmartModalService, private http: HttpClient) {
        this.http.get('/testtimetable').subscribe(result => {
            this.lessons = result;
            this.allmentors = Array.from(new Set(this.lessons.map((l) => l.mentorName)));
        });
    }

    newAppointment() {
        this.ngxSmartModalService.getModal('newLessonPopup').open();
    }

    getCorrectMentors() {
        if (this.actualMentor === 'Mentor') {
            return this.lessons;
        } else {
            return this.lessons.filter((l) => l.mentorName === this.actualMentor);
        }
    }
}
