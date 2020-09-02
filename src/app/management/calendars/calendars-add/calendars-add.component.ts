import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { CalendarsShowComponent } from "../calendars-show/calendars-show.component";

@Component({
  selector: 'app-calendars-add',
  templateUrl: './calendars-add.component.html',
  styleUrls: ['./calendars-add.component.scss']
})
export class CalendarsAddComponent implements OnInit {


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

}
