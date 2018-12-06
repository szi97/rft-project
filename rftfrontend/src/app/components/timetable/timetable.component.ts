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
        this.lessons = [
            {oraszam: 1, datum: '2018.01.02.', idopont: '12:00', helyszin: 'Egyetem',
                tantargy: 'matek', tema: 'egész számok', megjegyzes: 'hasznos'},
            {oraszam: 2, datum: '2018.01.09.', idopont: '12:00', helyszin: 'Egyetem',
                tantargy: 'matek', tema: 'egész számok', megjegyzes: 'nem tudott figyelni'},
            {oraszam: 3, datum: '2018.01.016.', idopont: '12:00', helyszin: 'Egyetem',
                tantargy: 'matek', tema: 'egész számok', megjegyzes: 'betegeskedett'}
        ];

        this.http.get('/testschedule').subscribe(result => {console.log(this.lessons); });
    }
}
