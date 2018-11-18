
import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import {HomeComponent} from './components/home/home.component';
import { MAndMComponent } from './components/schedule/mentorandmentored.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TimetableComponent } from './components/timetable/timetable.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'menetrend', component: MAndMComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'órarend', component: TimetableComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
