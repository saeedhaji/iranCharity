import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { EDIT_FORM } from "./edit-form";

@Component({
  selector: 'app-calendars-edit',
  templateUrl: './calendars-edit.component.html',
  styleUrls: ['./calendars-edit.component.scss']
})
export class CalendarsEditComponent implements OnInit {

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
