import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerTestComponent } from "./server-test.component";


const routes: Routes = [
  {
    path:'',
    component:ServerTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerTestRoutingModule { }
