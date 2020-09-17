import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { CalendarsShowComponent } from "../calendars-show/calendars-show.component";
import { FormGroup } from "@angular/forms";
import { CALENDAR_FORM } from "./calendar-form";
import { UsersService } from "../../users/users.service";

@Component({
  selector: 'app-calendars-add',
  templateUrl: './calendars-add.component.html',
  styleUrls: ['./calendars-add.component.scss']
})
export class CalendarsAddComponent implements OnInit {

  calendarForm:FormGroup=CALENDAR_FORM.create();

  constructor(public dialog: MatDialog ,private usersService:UsersService) { }



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
      this.usersService.saveUser(this.calendarForm.getRawValue()).subscribe(res=>{
        console.log(res)
      })
    }else{
      console.log('saeed')
    }
  }

  onSaveClick(){
    this.usersService.getUsers().subscribe((res)=>{
        console.log(res);
      }
    )
  }
}
