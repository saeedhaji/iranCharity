import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { EDIT_FORM } from "../../calendars/calendars-edit/edit-form";

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.scss']
})
export class RolesEditComponent implements OnInit {
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
