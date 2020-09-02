import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { EventsShowComponent } from "../events-show/events-show.component";

@Component({
  selector: 'app-events-add',
  templateUrl: './events-add.component.html',
  styleUrls: ['./events-add.component.scss']
})
export class EventsAddComponent implements OnInit {


  constructor(public dialog: MatDialog) { }



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

}
