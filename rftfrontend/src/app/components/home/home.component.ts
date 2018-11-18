import {Component} from '@angular/core';
import { hometemplate } from './home.component.tpl';

@Component ({
    selector: 'app-home',
    template: hometemplate,
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    Igaz: true;
}
