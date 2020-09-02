import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorsListComponent } from "./sponsors-list.component";


const routes: Routes = [
  {
    path:'',
    component:SponsorsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorsListRoutingModule { }
