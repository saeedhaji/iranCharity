import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ServerTestComponent } from "./server-test/server-test.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'iranCharity';

//   constructor(public dialog: MatDialog){}
//   openDialog() {
//     this.dialog.open(ServerTestComponent,
//       {
// width:"800px",
// height:"800px"
//     });
//   }
}
