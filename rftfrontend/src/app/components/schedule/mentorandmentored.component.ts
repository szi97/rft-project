import {Component, OnInit} from '@angular/core';
import {mentorandmentoredtemplate} from './mentorandmentored.component.tpl';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component ({
    selector: 'app-mentorandmentored',
    template: mentorandmentoredtemplate,
    styleUrls: ['./mentorandmentored.component.scss']
})

export class MAndMComponent {
    contacts: Array<any>;
    mentor: String;

    constructor(public ngxSmartModalService: NgxSmartModalService) {
        this.contacts = [
            {mentor: 'Béla', mentoralt: 'Pisti', intezmeny: 'int1', mappa: 'link1'},
            {mentor: 'Kati', mentoralt: 'Dori', intezmeny: 'int2', mappa: 'link2'},
            {mentor: 'Kati', mentoralt: 'Dori', intezmeny: 'int3', mappa: 'link3'}
        ];
    }


    onClick(index: number) {
        this.ngxSmartModalService.getModal('mentorsPopup').open();
        this.ngxSmartModalService.setModalData(this.contacts[index].mentor, 'mentorsPopup');
    }
}
