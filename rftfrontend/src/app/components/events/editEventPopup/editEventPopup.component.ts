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

    event: any;

    constructor(public ngxSmartModalService: NgxSmartModalService, private http: HttpClient) {

    }

    saveEvent() {
        console.log(this.event);
    }

}
