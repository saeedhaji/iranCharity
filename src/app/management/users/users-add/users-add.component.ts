import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { UsersShowComponent } from "../users-show/users-show.component";
import { FormGroup } from "@angular/forms";
import { USER_FORM } from "./user-form";

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  userForm:FormGroup=USER_FORM.create();
  constructor(public dialog: MatDialog) { }


  openDialog() {
    const dialogRef = this.dialog.open(UsersShowComponent,{
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
    if(this.userForm.valid){
      console.log(this.userForm.getRawValue());
    }else{
      console.log('saeed')
    }
  }
}