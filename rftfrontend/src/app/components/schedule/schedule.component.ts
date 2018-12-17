import {Component} from '@angular/core';
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
    newContact = {mentorId: 0, mentorName: '', menteeId: 0, menteeName : '', institutionId: 0, institutionName : '', folderLink: '' };
    actualInstitution: String = 'Intézmény';
    allMentors: any;
    allMentees: any;
    allInstitutions: any;
    editableRow = -1;
    editedRow: any;
    usersRole: String;
    modifiedRow = {mentorName: '', menteeName: '', institutionName: '', folderLink: ''};

    constructor(public ngxSmartModalService: NgxSmartModalService, private http: HttpClient) {
       this.http.get('/menetrend').subscribe(result =>  {
           this.contacts = Object.values(result)[0];
           this.usersRole = Object.keys(result)[0];
        } );
        this.http.get('/testmentee').subscribe(result => this.allMentees = result );
        this.http.get('/testmentor').subscribe(result => this.allMentors = result);
        this.http.get('/testinstitution').subscribe(result => this.allInstitutions = result );
    }


    showMentor(id: number) {
        this.ngxSmartModalService.getModal('mentorsPopup').open();
        this.ngxSmartModalService.setModalData(this.allMentors.filter((m) => m.id === id)[0], 'mentorsPopup', true);
    }

    showMentee(id: number) {
        this.ngxSmartModalService.getModal('menteesPopup').open();
        this.ngxSmartModalService.setModalData(this.allMentees.filter((m) => m.id === id)[0], 'menteesPopup', true);
    }

    showInstitution(id: number) {
        this.ngxSmartModalService.getModal('institutionsPopup').open();
        this.ngxSmartModalService.setModalData(this.allInstitutions.filter((i) => i.id === id)[0], 'institutionsPopup', true);
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
        this.newContact.mentorId = this.allMentors[index].id;
        this.newContact.mentorName = this.allMentors[index].name;
    }

    SetNewContactMentee(index: number) {
        this.newContact.menteeId = this.allMentees[index].id;
        this.newContact.menteeName = this.allMentees[index].name;
    }

    SetNewContactInstitution(index: number) {
        this.newContact.institutionId = this.allInstitutions[index].id;
        this.newContact.institutionName = this.allInstitutions[index].name;
    }

    addContact() {
        this.createNewContact = !this.createNewContact;
        console.log(this.newContact);
       //  this.http.post('/?', this.newContact, {responseType: 'text'}).subscribe(status => console.log(status));

    }

    editRow(contact: any, index: number) {
        this.modifiedRow.mentorName = contact.mentorName;
        this.modifiedRow.menteeName = contact.menteeName;
        this.modifiedRow.institutionName = contact.institutionName;
        this.modifiedRow.folderLink = contact.folderLink;
        this.editableRow = index;
    }

    saveModification(contact: any) {
        this.editableRow = -1;
        console.log(contact);
        // this.http.post('/?', contact, {responseType: 'text'}).subscribe(status => console.log(status));

    }

    cancelModification(index: number) {
        this.contacts[index].mentorName = this.modifiedRow.mentorName;
        this.contacts[index].menteeName = this.modifiedRow.menteeName;
        this.contacts[index].institutionName = this.modifiedRow.institutionName;
        this.contacts[index].folderLink = this.modifiedRow.folderLink;
        this.editableRow = -1;
    }
}
