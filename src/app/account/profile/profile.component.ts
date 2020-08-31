import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { LOGIN_FORM } from "./login-form";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 
loginForm:FormGroup=LOGIN_FORM.create();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.loginForm.valid){
    console.log(this.loginForm.getRawValue())
  }
}
}
