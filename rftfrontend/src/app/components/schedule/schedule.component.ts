import {Component, OnInit} from '@angular/core';
import {scheduletemplate} from './schedule.component.tpl';
import {NgxSmartModalService} from 'ngx-smart-modal';
import { HttpClient } from '@angular/common/http';

@Component ({
    selector: 'app-schedule',
    template: scheduletemplate,
    styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent {
    contacts: any;
    createNewContact = false;
    newContact = {mentorId: 0, mentorName: '', menteeId: 0, menteeName : '', institutionId: 0, institutionName : '', folder: '' };
    actualInstitution: String = 'Intézmény';
    allMentors = [];
    allMentees = [];
    allInstitutions = [];
    editableRow = -1;
    editedRow: any;

    constructor(public ngxSmartModalService: NgxSmartModalService, private http: HttpClient) {
       this.http.get('/menetrend').subscribe(result => {
            this.contacts = result;
            this.allInstitutions = [{institutionId: 1, institutionName: 'Ize'}, {institutionId: 2, institutionName: 'Izeke'}];
            this.allMentors = [{mentorId: 1, mentorName: 'Kis Pista'}, {mentorId: 2, mentorName: 'Nagy Pista'}];
            this.allMentees = [{menteeId: 1, menteeName: 'Balla Tibi'}, {menteeId: 2, menteeName: 'Kovács Krisfót'}];
    });
    // itt majd meg kell kapnom a mentorokat, mentoráltakat és intézményeket
    // akkor majd az institutions tömb sem fog kelleni, mert az összes meglesz :D
    }


    showMentor(id: number) {
        this.ngxSmartModalService.getModal('mentorsPopup').open();
        this.ngxSmartModalService.setModalData(id, 'mentorsPopup', true);
    }

    showMentored(id: number) {
        this.ngxSmartModalService.getModal('menteesPopup').open();
        this.ngxSmartModalService.setModalData(id, 'menteesPopup', true);
    }

    showInstitution(id: number) {
        this.ngxSmartModalService.getModal('institutionsPopup').open();
        this.ngxSmartModalService.setModalData(id, 'institutionsPopup', true);
    }

    getCorrectContacts() {
        if (this.actualInstitution === 'Intézmény') {
            return this.contacts;
        } else {
            return this.contacts.filter((c) => c.institutionName === this.actualInstitution);
        }
    }

    setDefaultNewContact() {
        this.createNewContact = !this.createNewContact;
        this.SetNewContactMentor(0);
        this.SetNewContactMentee(0);
        this.SetNewContactInstitution(0);
    }

    SetNewContactMentor(index: number) {
        this.newContact.mentorId = this.allMentors[index].mentorId;
        this.newContact.mentorName = this.allMentors[index].mentorName;
    }

    SetNewContactMentee(index: number) {
        this.newContact.menteeId = this.allMentees[index].menteeId;
        this.newContact.menteeName = this.allMentees[index].menteeName;
    }

    SetNewContactInstitution(index: number) {
        this.newContact.institutionId = this.allInstitutions[index].institutionId;
        this.newContact.institutionName = this.allInstitutions[index].institutionName;
    }

    addContact() {
        this.createNewContact = !this.createNewContact;
        console.log(this.newContact);
    }
}
