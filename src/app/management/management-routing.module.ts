import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from "./management.component";


const routes: Routes = [
  {
    path:'',
    component:ManagementComponent,
    children:[
      {
        path: '',
        redirectTo:'users',
      },
      {
        path: 'users',
        loadChildren:()=>import('./users/users.module').then((m)=>m.UsersModule),
      },
      {
        path: 'roles',
        loadChildren:()=>import('./roles/roles.module').then((m)=>m.RolesModule),
      },

      {
        path: 'sponsors',
        loadChildren:()=>import('./sponsors/sponsors.module').then((m)=>m.SponsorsModule),
      },
      {
        path: 'events',
        loadChildren:()=>import('./events/events.module').then((m)=>m.EventsModule),
      },
      {
        path: 'calendars',
        loadChildren:()=>import('./calendars/calendars.module').then((m)=>m.CalendarsModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
