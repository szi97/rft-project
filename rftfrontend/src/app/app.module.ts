import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './components/app/app.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { ScheduleComponent } from './components/schedule/schedule.component';
import {MentorsPopupComponent} from './components/schedule/mentors/mentorspopup.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import {LoginComponent} from './components/login/login.component';
import { MenteesPopupComponent } from './components/schedule/mentees/menteespopup.component';
import { InstitutionsPopupComponent } from './components/schedule/institutions/insitutionspopup.component';
import { HttpClientModule } from '@angular/common/http';
import { NewLessonPopupComponent } from './components/timetable/newlesson/newlessonpopup.component';
import { EventComponent } from './components/events/event.component';
import { NewEventPopupComponent } from './components/events/newEventPopup/newEventPopup.component';
import { editEventPopupTemplate } from './components/events/editEventPopup/editEventPopup.component.tpl';
import { EditEventPopupComponent } from './components/events/editEventPopup/editEventPopup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleComponent,
    MentorsPopupComponent,
    MenteesPopupComponent,
    InstitutionsPopupComponent,
    RegistrationComponent,
    TimetableComponent,
    NewLessonPopupComponent,
    LoginComponent,
    EventComponent,
    NewEventPopupComponent,
    EditEventPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule
  ],
  providers: [NgxSmartModalService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
  }
}
