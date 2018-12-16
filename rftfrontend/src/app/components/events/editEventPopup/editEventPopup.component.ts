import { Component, AfterViewInit } from '@angular/core';
import {editEventPopupTemplate} from './editEventPopup.component.tpl';
import { HttpClient } from '@angular/common/http';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-event-popup',
  template: editEventPopupTemplate,
  styleUrls: ['./editEventPopup.component.scss'],
  providers: [DatePipe]
})
export class EditEventPopupComponent implements AfterViewInit {

    modifiedEvent: any;

    constructor(public ngxSmartModalService: NgxSmartModalService, public datepipe: DatePipe, private http: HttpClient) {
   }

    saveEvent() {
        this.modifiedEvent = this.ngxSmartModalService.getModalData('editEventPopup');
        this.modifiedEvent.date = this.datepipe.transform(this.modifiedEvent.date, 'yyyy-MM-dd');
        this.modifiedEvent.time = this.datepipe.transform(this.modifiedEvent.time, 'HH:mm:00');
        delete this.modifiedEvent['organizer'];
        this.http.post('/?', this.modifiedEvent, {responseType: 'text'}).subscribe(status => {
            console.log(status);
            this.ngxSmartModalService.getModal('editEventPopup').close();
        });
    }

    ngAfterViewInit() {
        const data = this.ngxSmartModalService.getModalData('editEventPopup');
        this.modifiedEvent.name = data.name;
        this.modifiedEvent.date = data.date;
        this.modifiedEvent.time = data.time;
        this.modifiedEvent.location = data.location;
        this.modifiedEvent.description = data.description;
        this.modifiedEvent.organizers = data.organizers;
        console.log('MODIFIED');
        console.log(this.modifiedEvent);
    }

    cancelEdit() {
        // this.ngxSmartModalService.setModalData(this.modifiedEvent, 'editEventPopup', true);
    }

}
