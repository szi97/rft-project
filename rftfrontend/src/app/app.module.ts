import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { MAndMComponent } from './components/schedule/mentorandmentored.component';
import {MentorsPopupComponent} from './components/schedule/mentors/mentorspopup.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import {LoginComponent} from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MAndMComponent,
    MentorsPopupComponent,
    RegistrationComponent,
    TimetableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot(),
    FormsModule
  ],
  providers: [NgxSmartModalService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
  }
}
