import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { EventsEditComponent } from "../events-edit/events-edit.component";

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.scss']
})
export class EventsDetailComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(EventsEditComponent,{
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
