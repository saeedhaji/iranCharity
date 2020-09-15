import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from "./public.component";


const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
    children:[
      {
        path: '',
        redirectTo:'about-us',
      },
      {
        path: 'about-us',
        loadChildren:()=>import('./about-us/about-us.module').then((m)=>m.AboutUsModule),
      },
      {
        path: 'contact-us',
        loadChildren:()=>import('./contact-us/contact-us.module').then((m)=>m.ContactUsModule),
      },
      {
        path: 'privacy-policy',
        loadChildren:()=>import('./privacy-policy/privacy-policy.module').then((m)=>m.PrivacyPolicyModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
