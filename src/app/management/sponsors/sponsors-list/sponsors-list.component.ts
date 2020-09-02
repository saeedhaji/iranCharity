import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { SponsorsAddComponent } from "../sponsors-add/sponsors-add.component";
import { SponsorsDetailComponent } from "../sponsors-detail/sponsors-detail.component";


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-sponsors-list',
  templateUrl: './sponsors-list.component.html',
  styleUrls: ['./sponsors-list.component.scss']
})
export class SponsorsListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(SponsorsAddComponent,{
      // height: '400px',
      // width: '600px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogOne() {
    const dialogRef = this.dialog.open(SponsorsDetailComponent,{
      // height: '400px',
       width: '600px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
