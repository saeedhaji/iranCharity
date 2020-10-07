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
  {
    path:'test',
    loadChildren:()=>import('./test/test.module').then((m)=>m.TestModule),
  },
  {
    path:'wishes',
    loadChildren:()=>import('./wishes/wishes.module').then((m)=>m.WishesModule),
  },
  {
    path:'public',
    loadChildren:()=>import('./public/public.module').then((m)=>m.PublicModule),
  },
  {
    path:'sponsor',
    loadChildren:()=>import('./sponsor/sponsor.module').then((m)=>m.SponsorModule),
  },
  {
    path:'server-test',
    loadChildren:()=>import('./server-test/server-test.module').then((m)=>m.ServerTestModule),
  },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
