import { Component, OnInit } from '@angular/core';
import { UsersEditComponent } from "../users-edit/users-edit.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  openDialog() {
    const dialogRef = this.dialog.open(UsersEditComponent,{
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
