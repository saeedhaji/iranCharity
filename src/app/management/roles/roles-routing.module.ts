import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from "./roles.component";


const routes: Routes = [
  {
    path:'',
    component:RolesComponent,
    children:[
      {
        path: '',
        redirectTo:'roles-list',
      },
      {
        path: 'roles-list',
        loadChildren:()=>import('./roles-list/roles-list.module').then((m)=>m.RolesListModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
