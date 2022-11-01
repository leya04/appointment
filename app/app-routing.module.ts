import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'schedule',component:ScheduleComponent},
  {path: 'history',component:HistoryComponent},
  {path: 'new-appointment',component: NewAppointmentComponent},
  {path: 'main', component: MainComponent,
    children: [{path: 'home',component: HomeComponent},
               
               
                {path: '',redirectTo: 'home', pathMatch: 'full' }
    ]},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
