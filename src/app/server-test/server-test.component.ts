import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { ServerService } from "./server.service";
// import { HtmlAstPath } from "@angular/compiler";
// import { FormGroup } from "@angular/forms";
// import { SERVER_FORM } from "./server-form";

// interface ServerTestInterface{
//   title:string;
//   price:string;
//   text:string;
//   icon:string;
// }
// class ServerTestModel implements  ServerTestInterface{
//   title='';
//   price='';
//   text='';
//   icon='';
// constructor(
//   title:string,
//   price:string,
//   text:string,
//   icon:string,
// ){
//   this.title=title;
//   this.price=price;
//   this.text=text;
//   this.icon=icon;

// }
// } 
// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }


@Component({
  selector: 'app-server-test',
  templateUrl: './server-test.component.html',
  styleUrls: ['./server-test.component.scss']
})
export class ServerTestComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy           
  {

  value:number=85;

  serverId:number=20;
  serverStatuser:string='hello saeed and mohammad';
  allowNewButtonServer:boolean=false;
  serverCreationMohammad:string='سرور جدید اضافه نشده است'

  allowNewServer:boolean=false;
  serverCreationServer:string='سرور جدید اضافه نشده است';
  serverName:string='سرور شماره 1'
  serverCreationSaeed:boolean=false;
serverStatus:string="";
serverNameText:string="";
serverModelNew:string="server number 12";
serverSuccses:boolean=false;
salamServer:boolean=false;
textList:any[]=[
{
  family:'haji'
},
{
  family:'haji'
},
{
  family:'haji'
},
{
  family:'haji'
},
{
  family:'haji'
}
  
]
divar:any[]=[
  {
    text:'container div and image and text and message'
  },
  {
    text:'container div and image and text and message'
  },
  {
    text:'container div and image and text and message'
  },
  {
    text:'container div and image and text and message'
  },
]


list:any[]=[
  {
    name:'my name is saeed',
  },
  {
    name:'my name is saeed',
  },
  {
    name:'my name is saeed',
  },
  {
    name:'my name is saeed',
  },
  {
    name:'my name is saeed',
  },
  {
    name:'my name is saeed',
  }
]
numbers:number[]=[1,2,3,4,5,6,7,8,9,10];
oddNumber:number[]=[1,3,5,7,9];
evenNumber:number[]=[2,4,6,8,10];
onFalsy:boolean=false;
  
  //  value = 'Clear me';

// serverForm:FormGroup=SERVER_FORM.create();

//   isHeadingMenu:boolean=false;
 
//   myFilter = (d: Date | null): boolean => {
//     const day = (d || new Date()).getDay();
//     return day !== 0 && day !== 6;
//   }

  // cardList:ServerTestInterface[]=[
    // new ServerTestModel(' فرش ماشینی گل برجسته طرح ابریشم دو تخته 6 متری','1,200,000تومان',' لحظاتی پیش در چهار صد دستگاه','face'),
    // new ServerTestModel(' فرش ماشینی گل برجسته طرح ابریشم دو تخته 6 متری','1,200,000تومان',' لحظاتی پیش در چهار صد دستگاه','face'),
    // new ServerTestModel(' فرش ماشینی گل برجسته طرح ابریشم دو تخته 6 متری','1,200,000تومان',' لحظاتی پیش در چهار صد دستگاه','face'),
    // new ServerTestModel(' فرش ماشینی گل برجسته طرح ابریشم دو تخته 6 متری','1,200,000تومان',' لحظاتی پیش در چهار صد دستگاه','face'),

  // ];
  // tiles: Tile[] = [
  //   {text: 'header', cols: 4, rows: 1, color: 'lightblue'},

  //   {text: 'menu', cols: 1, rows: 4, color: 'lightpink'},
  //   {text: 'content', cols: 3, rows: 4, color: 'lightgreen'},
  //   {text: 'footer', cols: 4, rows: 1, color: '#DDBDF1'},
  // ];
  // value = 'Clear me';
  // removable = true;
  constructor(private serverService:ServerService) { 
              
  
    setTimeout(()=>{
      this.allowNewButtonServer=true;
    },5000);
    this.serverStatuser=Math.random()<0.5?'on':'off';
    setTimeout(()=>{
      this.allowNewServer=true
    },2000);
// this.serverStatus= Math.random() < 1 ? 'on' : 'off' ;
this.serverStatus= Math.random() > 0.5 && 1 ? 'on' : 'off' ;
  }

  ngOnInit(): void {
    // this.getServerList();
    console.log('ngOnInit Called')
  }
  ngOnChanges(){
    console.log('ngOnChanges Called')
  }
    ngDoCheck(){
      console.log('ngDoCheck callede')
    }
    ngAfterContentInit(){
      console.log('ngAfterContentInit callede')
    }
    ngAfterContentChecked(){
      console.log('ngAfterContentChecked callede')
    }
    ngAfterViewInit(){
      console.log('ngAfterViewInit callede')
    }
    ngAfterViewChecked(){
      console.log('ngAfterViewChecked callede')
    }
    ngOnDestroy(){
      console.log('ngOnDestroy callede')
    }
  onCreateServer(){
    this.serverCreationServer='سرور جدید اضافه شده است' + this.serverName;
    this.serverCreationSaeed=true;
  }
  getColor(){
return this.serverStatus === "on" ? "green" : "red"
  }

  // private getServerList(){
  //   this.serverService.getServer().subscribe((res:any)=>{
  //     console.log(res);

  //     this.cardList = res;
  //   });
  // }

  // onChangeClick(){
  //   this.isHeadingMenu=true;
  // }

  // onSubmit(){
  //   if(this.serverForm.valid){
  //     console.log(this.serverForm.getRawValue());
  //   }
  //   else{
  //     console.log('saeed')
  //   }
  // }

  // saeedalert(){
  //   alert('saeed')
  // }
 
  onCreateMohammd(){
    this.serverSuccses=true;
    this.salamServer=true;
    this.serverCreationMohammad='سرور جدید با موفقیت نصب شد'+this.serverModelNew;
    
  }
  onUppdateServerNameText(event:Event){
this.serverNameText=(<HTMLInputElement>event.target).value;
  }
  getColorede(){
return this.serverStatuser ==="on"?'red':'green'
  }
  onLocalServer(localTemplate){
console.log(localTemplate)
  }


}
