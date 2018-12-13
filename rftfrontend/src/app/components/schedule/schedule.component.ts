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
    newContact = [{mentorName: '', menteeName : '', institutionName : '', folder: '' }];
    institutions = [];

    constructor(public ngxSmartModalService: NgxSmartModalService, private http: HttpClient) {
       this.http.get('/menetrend').subscribe(result => {
            this.contacts = result;
            this.institutions = Array.from(new Set(this.contacts.map((contact) => contact.institutionName)));
            console.log(this.institutions);
    });
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

    addContact() {
        console.log(this.newContact);
        this.createNewContact = !this.createNewContact;
    }
}
