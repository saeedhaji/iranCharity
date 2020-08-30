import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from "./auth.component";


const routes: Routes = [
  {
    path:'',
    component:AuthComponent,
    children:[
      {
        path: '',
        redirectTo:'signin',
      },
      {
        path: 'signin',
        loadChildren:()=>import('./signin/signin.module').then((m)=>m.SigninModule),
      },
      {
        path: 'signup',
        loadChildren:()=>import('./signup/signup.module').then((m)=>m.SignupModule),
      },

      {
        path: 'forgot-password',
        loadChildren:()=>import('./forgotpassword/forgotpassword.module').then((m)=>m.ForgotpasswordModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
