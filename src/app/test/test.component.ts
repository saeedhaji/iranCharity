import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
interface TestItemInterface{
  // number:number;
  title:string;
  place:string;
 
}
class TestItemModel implements TestItemInterface{
  // number=1;
  title='';
  place='';
  constructor(
    // number:number,
    title:string,
    place:string,
  ){
    // this.number=number;
    this.title=title;
    this.place=place;
  }
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  value = 'Clear me';
  name:string='';
  sname:string='';
   
  // user={
  //   name:'',
  //   sname:'',
  // } 
  userList:TestItemInterface[]=[
    new TestItemModel('ali','rey'),
    new TestItemModel('ali','rey'),
    new TestItemModel('ali','rey'),
    new TestItemModel('ali','rey'),
    new TestItemModel('ali','rey'),
    new TestItemModel('ali','rey'),
  ];
  isAddingUsers=false;
  isUppdatingUsers=false;
  selectedNewUsersIndex:number; 

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: 2000,}
    );
  }

  ngOnInit(): void {
  }

  onSaveClick(){
    const x={
      title:this.name,
      place:this.sname,
    };
    this.userList.push(x);
    this.restForm();
    this.isAddingUsers=false;
  }

  restForm(){
    this.name='';
    this.sname='';
  }

  onCreateClick(){
    this.isAddingUsers=true;
    this.isUppdatingUsers=false;
    this.restForm();
  }

  onCancelClick(){
    this.isAddingUsers=false;
  }

  onEditClick(item:any,h:number){
    this.isUppdatingUsers=true;
    this.isAddingUsers=false;
    this.name=item.title;
    this.sname=item.place;
    this.selectedNewUsersIndex=h;
  }

  onUppdateClick(){
    this.isUppdatingUsers=false;
    const x={
      title:this.name,
      place:this.sname,
    };
    this.userList[this.selectedNewUsersIndex]=x;
  }

  onRemoveClick(h:number){
    this.userList.splice(h,1);

  }
}
