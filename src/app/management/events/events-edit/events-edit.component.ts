import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { EDIT_FORM } from "../../calendars/calendars-edit/edit-form";

@Component({
  selector: 'app-events-edit',
  templateUrl: './events-edit.component.html',
  styleUrls: ['./events-edit.component.scss']
})
export class EventsEditComponent implements OnInit {
  
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
