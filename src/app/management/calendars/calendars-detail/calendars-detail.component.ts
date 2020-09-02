import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { CalendarsEditComponent } from "../calendars-edit/calendars-edit.component";

@Component({
  selector: 'app-calendars-detail',
  templateUrl: './calendars-detail.component.html',
  styleUrls: ['./calendars-detail.component.scss']
})
export class CalendarsDetailComponent implements OnInit {

  
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(CalendarsEditComponent,{
      // height: '400px',
      //  width: '600px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
