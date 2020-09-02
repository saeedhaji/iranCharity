import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorsComponent } from "./sponsors.component";


const routes: Routes = [
  {
    path:'',
    component:SponsorsComponent,
    children:[
      {
        path: '',
        redirectTo:'sponsors-list',
      },
      {
        path: 'sponsors-list',
        loadChildren:()=>import('./sponsors-list/sponsors-list.module').then((m)=>m.SponsorsListModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorsRoutingModule { }
