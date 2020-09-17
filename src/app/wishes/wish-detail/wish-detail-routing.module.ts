import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishDetailComponent } from "./wish-detail.component";


const routes: Routes = [
  {
    path:'',
    component:WishDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishDetailRoutingModule { }
