import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { EventsShowComponent } from "../events-show/events-show.component";
import { FormGroup } from "@angular/forms";
import { EVENT_FORM } from "./event-form";
import { UsersService } from "../../users/users.service";

@Component({
  selector: 'app-events-add',
  templateUrl: './events-add.component.html',
  styleUrls: ['./events-add.component.scss']
})
export class EventsAddComponent implements OnInit {

  eventForm:FormGroup=EVENT_FORM.create();

  constructor(public dialog: MatDialog ,private usersService:UsersService) { }



  openDialog() {
    const dialogRef = this.dialog.open(EventsShowComponent,{
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
    if(this.eventForm.valid){
      this.usersService.saveUser(this.eventForm.getRawValue()).subscribe(res=>{
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
