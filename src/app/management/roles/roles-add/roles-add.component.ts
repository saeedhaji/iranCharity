import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { RolesShowComponent } from "../roles-show/roles-show.component";
import { FormGroup } from "@angular/forms";
import { ROLE_FORM } from "./role-form";

@Component({
  selector: 'app-roles-add',
  templateUrl: './roles-add.component.html',
  styleUrls: ['./roles-add.component.scss']
})
export class RolesAddComponent implements OnInit {

  roleForm:FormGroup=ROLE_FORM.create();
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
  onSubmit(){
    if(this.roleForm.valid){
      console.log(this.roleForm.getRawValue());
    }else{
      console.log('saeed')
    }
  }
}
