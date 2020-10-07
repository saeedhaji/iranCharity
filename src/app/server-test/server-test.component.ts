import { Component, OnInit } from '@angular/core';
import { ServerService } from "./server.service";
import { FormGroup } from "@angular/forms";
import { SERVER_FORM } from "./server-form";

interface ServerTestInterface{
  title:string;
  price:string;
  text:string;
  icon:string;
}
class ServerTestModel implements  ServerTestInterface{
  title='';
  price='';
  text='';
  icon='';
constructor(
  title:string,
  price:string,
  text:string,
  icon:string,
){
  this.title=title;
  this.price=price;
  this.text=text;
  this.icon=icon;

}
} 
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-server-test',
  templateUrl: './server-test.component.html',
  styleUrls: ['./server-test.component.scss']
})
export class ServerTestComponent implements OnInit {
 

serverForm:FormGroup=SERVER_FORM.create();

  isHeadingMenu:boolean=false;
 
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }

  cardList:ServerTestInterface[]=[
    // new ServerTestModel(' فرش ماشینی گل برجسته طرح ابریشم دو تخته 6 متری','1,200,000تومان',' لحظاتی پیش در چهار صد دستگاه','face'),
    // new ServerTestModel(' فرش ماشینی گل برجسته طرح ابریشم دو تخته 6 متری','1,200,000تومان',' لحظاتی پیش در چهار صد دستگاه','face'),
    // new ServerTestModel(' فرش ماشینی گل برجسته طرح ابریشم دو تخته 6 متری','1,200,000تومان',' لحظاتی پیش در چهار صد دستگاه','face'),
    // new ServerTestModel(' فرش ماشینی گل برجسته طرح ابریشم دو تخته 6 متری','1,200,000تومان',' لحظاتی پیش در چهار صد دستگاه','face'),

  ];
  tiles: Tile[] = [
    {text: 'header', cols: 4, rows: 1, color: 'lightblue'},

    {text: 'menu', cols: 1, rows: 4, color: 'lightpink'},
    {text: 'content', cols: 3, rows: 4, color: 'lightgreen'},
    {text: 'footer', cols: 4, rows: 1, color: '#DDBDF1'},
  ];
  value = 'Clear me';
  removable = true;
  constructor(private serverService:ServerService) { }

  ngOnInit(): void {
    this.getServerList();
  }


  private getServerList(){
    this.serverService.getServer().subscribe((res:any)=>{
      console.log(res);

      this.cardList = res;
    });
  }

  onChangeClick(){
    this.isHeadingMenu=true;
  }

  onSubmit(){
    if(this.serverForm.valid){
      console.log(this.serverForm.getRawValue());
    }
    else{
      console.log('saeed')
    }
  }

}
