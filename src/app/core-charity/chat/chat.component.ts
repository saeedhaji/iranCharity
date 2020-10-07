import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from "./chat.service";

interface ChatItemListInterface{
  name:string;
  title:string;
  date:number;
  number:number;
}
class ChatItemListModel implements ChatItemListInterface{
  name='';
  title='';
  date;
  number;
constructor(
  name:string,
  title:string,
  date:number,
  number:number,
){
  this.name=name='';
  this.title=title='';
  this.date=date;
  this.number=number;
}
}
export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

 chatList:any[]=[];

  showFiller = false;
  lodingServer:boolean=true;
  isShowing:boolean=true;

  constructor(private chatService:ChatService) { }

  ngOnInit(): void {

    this.getChatsList();
  }


  private getChatsList(){
    this.chatService.getChats().subscribe((res:any)=>{
      console.log(res);
       this.lodingServer=false;
       this.chatList = res;
    });
  }

  onHiddenClick(){
    this.isShowing=false;
  }
}
