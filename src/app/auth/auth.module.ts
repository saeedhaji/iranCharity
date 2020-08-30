import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SigninModule } from "./signin/signin.module";
import { SignupModule } from "./signup/signup.module";
import { ForgotpasswordModule } from "./forgotpassword/forgotpassword.module";


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SigninModule,
    SignupModule,
    ForgotpasswordModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
