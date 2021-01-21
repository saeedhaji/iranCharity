import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFondComponent } from "./page-not-fond/page-not-fond.component";


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
    path:'sponsor',
    loadChildren:()=>import('./sponsor/sponsor.module').then((m)=>m.SponsorModule),
  },
  {
    path:'server-test',
    loadChildren:()=>import('./server-test/server-test.module').then((m)=>m.ServerTestModule),
  },
  {
    path:'public',
    loadChildren:()=>import('./public/public.module').then((m)=>m.PublicModule),
  },
  {
    path:'not-fond',
    component:PageNotFondComponent
  },
  {
    path:'**',redirectTo:'/not-fond'
  }

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
