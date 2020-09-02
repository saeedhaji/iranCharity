import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from "./users.component";


const routes: Routes = [
  {
    path:'',
    component:UsersComponent,
    children:[
      {
        path: '',
        redirectTo:'users-list',
      },
      {
        path: 'users-list',
        loadChildren:()=>import('./users-list/users-list.module').then((m)=>m.UsersListModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
