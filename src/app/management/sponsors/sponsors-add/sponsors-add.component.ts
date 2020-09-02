import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { SponsorsShowComponent } from "../sponsors-show/sponsors-show.component";

@Component({
  selector: 'app-sponsors-add',
  templateUrl: './sponsors-add.component.html',
  styleUrls: ['./sponsors-add.component.scss']
})
export class SponsorsAddComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  openDialog() {
    const dialogRef = this.dialog.open(SponsorsShowComponent,{
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
