import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarsComponent } from "./calendars.component";


const routes: Routes = [
  {
    path:'',
    component:CalendarsComponent,
    children:[
      {
        path: '',
        redirectTo:'calendars-list',
      },
      {
        path: 'calendars-list',
        loadChildren:()=>import('./calendars-list/calendars-list.module').then((m)=>m.CalendarsListModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarsRoutingModule { }
