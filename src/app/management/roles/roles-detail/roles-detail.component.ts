import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { RolesEditComponent } from "../roles-edit/roles-edit.component";

@Component({
  selector: 'app-roles-detail',
  templateUrl: './roles-detail.component.html',
  styleUrls: ['./roles-detail.component.scss']
})
export class RolesDetailComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(RolesEditComponent,{
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
