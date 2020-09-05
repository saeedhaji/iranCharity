import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { EDIT_FORM } from "../../calendars/calendars-edit/edit-form";

@Component({
  selector: 'app-sponsors-edit',
  templateUrl: './sponsors-edit.component.html',
  styleUrls: ['./sponsors-edit.component.scss']
})
export class SponsorsEditComponent implements OnInit {

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
