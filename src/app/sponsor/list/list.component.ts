import { Component, OnInit } from '@angular/core';
import { SponsorService } from "../sponsor.service";

interface ListItemInterface{
  img:string;
  iconStop:string;
  iconHome:string; 
  iconGrads:string ;
  textTitle:string;
  textSubtitle:string;
  children:string;
  years:number;
  iconAudio:string;
  message:string;
  quick:string;
}
class ListItemModel implements ListItemInterface {
  img='';
  iconStop='';
  iconHome='';
  iconGrads='';
  textTitle='';
  textSubtitle='';
  children='';
  years;
  iconAudio='';
  message='';
  quick ='';

constructor(
  img:string,
  iconStop:string,
  iconHome:string,
  iconGrads:string ,
  textTitle:string,
  textSubtitle:string,
  children:string,
  years:number,
  iconAudio:string,
  message:string,
  quick:string,
){
  this.img=img;
  this.iconStop=iconStop;
  this.iconHome=iconHome;
  this.iconGrads=iconGrads;
  this.textTitle=textTitle;
  this.textSubtitle=textSubtitle;
  this.children=children;
  this.years;years;
  this.iconAudio=iconAudio;
  this.message=message;
  this.quick =quick ;

}

}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cardList:any[]=[];

  serverLoding:boolean=true;

  constructor( private sponsorService:SponsorService) { }

  ngOnInit(): void {

    this.getSponsorList();
  }


  private getSponsorList(){
    this.sponsorService.getSponsor().subscribe((res:any)=>{
      console.log(res);

    this.serverLoding=false;
      this.cardList = res;
    });
  }

  

}
