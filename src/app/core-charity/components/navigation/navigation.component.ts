import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { LocationComponent } from "../location/location.component";

@Component({  
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  openDialog() {
    const dialogRef = this.dialog.open(LocationComponent,
      {
        height: '800px',
        width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
