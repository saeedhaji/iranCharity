import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { SponsorsEditComponent } from "../sponsors-edit/sponsors-edit.component";

@Component({
  selector: 'app-sponsors-detail',
  templateUrl: './sponsors-detail.component.html',
  styleUrls: ['./sponsors-detail.component.scss']
})
export class SponsorsDetailComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(SponsorsEditComponent,{
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
