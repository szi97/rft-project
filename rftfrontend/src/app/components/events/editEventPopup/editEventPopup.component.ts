import { Component } from '@angular/core';
import {editEventPopupTemplate} from './editEventPopup.component.tpl';
import { HttpClient } from '@angular/common/http';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-edit-event-popup',
  template: editEventPopupTemplate,
  styleUrls: ['./editEventPopup.component.scss']
})
export class EditEventPopupComponent {

    modifiedEvent = {name: '', date: '', time: '', location: '', description: '', organizers: []};

    constructor(public ngxSmartModalService: NgxSmartModalService, private http: HttpClient) {
        ngxSmartModalService
            .setModalData({name: '', date: '', time: '', location: '', description: '', organizers: []}, 'editEventPopup', true);
    }

    saveEvent() {
        console.log(this.modifiedEvent);
    }

}
