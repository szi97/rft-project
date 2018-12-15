import { Component } from '@angular/core';
import {institutionsPopupTemplate} from './institutionspopup.component.tpl';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-institutions-popup',
  template: institutionsPopupTemplate,
  styleUrls: ['./institutionspopup.component.scss']
})
export class InstitutionsPopupComponent {
  institution: any;

}
