import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorComponent } from "./sponsor.component";


const routes: Routes = [{
  path:'',
  component:SponsorComponent,

  children:[
    {
      path: '',
      redirectTo:'list',
    },
    {
      path: 'list',
      loadChildren:()=>import('./list/list.module').then((m)=>m.ListModule),
    },
    {
      path: 'add',
      loadChildren:()=>import('./add/add.module').then((m)=>m.AddModule),
    },
    {
      path: 'detail',
      loadChildren:()=>import('./detail/detail.module').then((m)=>m.DetailModule),
    },
   
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorRoutingModule { }
