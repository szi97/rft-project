
import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import {HomeComponent} from './components/home/home.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { LoginComponent } from './components/login/login.component';
import { EventComponent } from './components/events/event.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'menetrend', component: ScheduleComponent},
    {path: 'regisztracio', component: RegistrationComponent},
    {path: 'orarend', component: TimetableComponent},
    {path: 'bejelentkezes', component: LoginComponent},
    {path: 'esemenyek', component: EventComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
