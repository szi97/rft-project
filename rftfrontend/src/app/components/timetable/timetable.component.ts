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
    editableRow = -1;
    modifiedRow = {lessonnumber: '', date: '', time: '', location: '', subject: '', topic: '', comment: '', menteeName: ''};

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

    editRow(lesson: any, index: number) {
        this.modifiedRow.lessonnumber = lesson.lessonnumber;
        this.modifiedRow.date = lesson.date;
        this.modifiedRow.time = lesson.time;
        this.modifiedRow.location = lesson.location;
        this.modifiedRow.subject = lesson.subject;
        this.modifiedRow.topic = lesson.topic;
        this.modifiedRow.comment = lesson.comment;
        this.modifiedRow.menteeName = lesson.menteeName;
        this.editableRow = index;
    }

    saveModification(lesson: any) {
        this.editableRow = -1;
        console.log(lesson);
        // this.http.post('/?', lesson, {responseType: 'text'}).subscribe(status => console.log(status));
    }

    cancelModification(index: number) {
        this.lessons[index].lessonnumber = this.modifiedRow.lessonnumber;
        this.lessons[index].date = this.modifiedRow.date;
        this.lessons[index].time = this.modifiedRow.time;
        this.lessons[index].location = this.modifiedRow.location;
        this.lessons[index].subject = this.modifiedRow.subject;
        this.lessons[index].topic = this.modifiedRow.topic;
        this.lessons[index].comment = this.modifiedRow.comment;
        this.lessons[index].menteeName = this.modifiedRow.menteeName;
        this.editableRow = -1;
    }
}
