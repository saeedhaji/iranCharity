import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { SponsorsShowComponent } from "../sponsors-show/sponsors-show.component";
import { SPONSOR_FORM } from "../sponsor-form";
import { FormGroup } from "@angular/forms";
import { UsersService } from "../../users/users.service";

@Component({
  selector: 'app-sponsors-add',
  templateUrl: './sponsors-add.component.html',
  styleUrls: ['./sponsors-add.component.scss']
})
export class SponsorsAddComponent implements OnInit {
  sponsorForm:FormGroup=SPONSOR_FORM.create();

  constructor(public dialog: MatDialog ,private usersService:UsersService) { }


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


  onSubmit(){
    if(this.sponsorForm.valid){
      this.usersService.saveUser(this.sponsorForm.getRawValue()).subscribe(res=>{
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
