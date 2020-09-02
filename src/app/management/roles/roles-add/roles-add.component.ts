import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { RolesShowComponent } from "../roles-show/roles-show.component";

@Component({
  selector: 'app-roles-add',
  templateUrl: './roles-add.component.html',
  styleUrls: ['./roles-add.component.scss']
})
export class RolesAddComponent implements OnInit {

  constructor(public dialog: MatDialog) { }



  openDialog() {
    const dialogRef = this.dialog.open(RolesShowComponent,{
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
