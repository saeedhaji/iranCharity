import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule),
  },

  {
    path:'account',
    loadChildren:()=>import('./account/account.module').then((m)=>m.AccountModule),
  },
  {
    path:'management',
    loadChildren:()=>import('./management/management.module').then((m)=>m.ManagementModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
