import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from "./events.component";


const routes: Routes = [
  {
    path:'',
    component:EventsComponent,
    children:[
      {
        path: '',
        redirectTo:'events-list',
      },
      {
        path: 'events-list',
        loadChildren:()=>import('./events-list/events-list.module').then((m)=>m.EventsListModule),

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
