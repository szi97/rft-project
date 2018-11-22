import {Component, OnInit} from '@angular/core';
import {scheduletemplate} from './schedule.component.tpl';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component ({
    selector: 'app-schedule',
    template: scheduletemplate,
    styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent {
    contacts: Array<any>;

    constructor(public ngxSmartModalService: NgxSmartModalService) {
        this.contacts = [
            {mentor: 'Béla', mentoralt: 'Pisti', intezmeny: 'int1', mappa: 'link1'},
            {mentor: 'Kati', mentoralt: 'Dori', intezmeny: 'int2', mappa: 'link2'},
            {mentor: 'Kati', mentoralt: 'Dori', intezmeny: 'int3', mappa: 'link3'}
        ];
    }


    showMentor(index: number) {
        this.ngxSmartModalService.getModal('mentorsPopup').open();
        this.ngxSmartModalService.setModalData(this.contacts[index].mentor, 'mentorsPopup', true);
    }

    showMentored(index: number) {
        this.ngxSmartModalService.getModal('menteesPopup').open();
        this.ngxSmartModalService.setModalData(this.contacts[index].mentoralt, 'menteesPopup', true);
    }

    showInstitution(index: number) {
        this.ngxSmartModalService.getModal('institutionsPopup').open();
        this.ngxSmartModalService.setModalData(this.contacts[index].intezmeny, 'institutionsPopup', true);
    }
}