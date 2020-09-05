import { Component, OnInit } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { EDIT_FORM } from "../../calendars/calendars-edit/edit-form";
@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {


  editForm:FormGroup=EDIT_FORM.create();
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    if(this.editForm.valid){
      console.log(this.editForm.getRawValue());
    }else{
      console.log('saeed')
    }
  }
}
