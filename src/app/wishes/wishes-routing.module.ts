import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishesComponent } from "./wishes.component";


const routes: Routes = [
  {
    path:'',
    component:WishesComponent,
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
        path: 'wish-detail',
        loadChildren:()=>import('./wish-detail/wish-detail.module').then((m)=>m.WishDetailModule),
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishesRoutingModule { }
