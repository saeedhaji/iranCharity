import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { CalendarsShowComponent } from "../calendars-show/calendars-show.component";
import { FormGroup } from "@angular/forms";
import { CALENDAR_FORM } from "./calendar-form";

@Component({
  selector: 'app-calendars-add',
  templateUrl: './calendars-add.component.html',
  styleUrls: ['./calendars-add.component.scss']
})
export class CalendarsAddComponent implements OnInit {

  calendarForm:FormGroup=CALENDAR_FORM.create();

  constructor(public dialog: MatDialog) { }



  openDialog() {
    const dialogRef = this.dialog.open(CalendarsShowComponent,{
    //  height: '800px',
        width: '100%', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.calendarForm.valid){
      console.log(this.calendarForm.getRawValue());
    }else{
      console.log('saeed')
    }
  }
}
