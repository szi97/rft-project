import { Component } from '@angular/core';
import { timetableTemplate } from './timetable.component.tpl';

@Component({
    selector: 'app-timetable',
    template: timetableTemplate,
    styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent {
    lessons: Array<any>;

    constructor() {
        this.lessons = [
            {oraszam: 1, datum: '2018.01.02.', idopont: '12:00', helyszin: 'Egyetem',
                tantargy: 'matek', tema: 'egész számok', megjegyzes: 'hasznos'},
            {oraszam: 2, datum: '2018.01.09.', idopont: '12:00', helyszin: 'Egyetem',
                tantargy: 'matek', tema: 'egész számok', megjegyzes: 'nem tudott figyelni'},
            {oraszam: 3, datum: '2018.01.016.', idopont: '12:00', helyszin: 'Egyetem',
                tantargy: 'matek', tema: 'egész számok', megjegyzes: 'betegeskedett'}
        ];
    }
}
