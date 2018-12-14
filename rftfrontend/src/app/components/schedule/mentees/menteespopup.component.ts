import { Component } from '@angular/core';
import {menteesPopupTemplate} from './menteespopup.component.tpl';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mentees-popup',
  template: menteesPopupTemplate,
  styleUrls: ['./menteespopup.component.scss']
})
export class MenteesPopupComponent {
  mentee: any;

}
