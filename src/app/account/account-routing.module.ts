import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from "./account.component";


const routes: Routes = [
  {
    path:'',
    component:AccountComponent,
    children:[
      {
        path: '',
        redirectTo:'profile',
      },
      {
        path: 'profile',
        loadChildren:()=>import('./profile/profile.module').then((m)=>m.ProfileModule),
      },
      {
        path: 'password',
        loadChildren:()=>import('./password/password.module').then((m)=>m.PasswordModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
