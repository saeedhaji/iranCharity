import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { RolesShowComponent } from "../roles-show/roles-show.component";
import { FormGroup } from "@angular/forms";
import { ROLE_FORM } from "./role-form";
import { UsersService } from "../../users/users.service";

@Component({
  selector: 'app-roles-add',
  templateUrl: './roles-add.component.html',
  styleUrls: ['./roles-add.component.scss']
})
export class RolesAddComponent implements OnInit {

  roleForm:FormGroup=ROLE_FORM.create();

  constructor(public dialog: MatDialog ,private usersService:UsersService ) { }



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
      this.usersService.saveUser(this.roleForm.getRawValue()).subscribe(res=>{
        console.log(res)
      })
    }else{
      console.log('saeed')
    }
  }

  onSaveClick(){
    this.usersService.getUsers().subscribe((res)=>{
        console.log(res);
      }
    )
  }
}
