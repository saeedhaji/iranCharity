import { Component, OnInit } from '@angular/core';

interface CardManagemenItemInterface{
  image:string;
  name:string;
  url:string;
}
class CardManagementItemModel implements CardManagemenItemInterface {
  image='';
  name='';
  url='';
constructor(
  image:string,
  name:string,
  url:string,
){
  this.image=image;
  this.name=name;
  this.url=url;
}
} 


@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  cardList:CardManagemenItemInterface []=[

    new CardManagementItemModel('face','users','/management/users'),
    new CardManagementItemModel('face','sponsors','/management/sponsors'),
    new CardManagementItemModel('face','roles','/management/roles'),
    new CardManagementItemModel('face','events','/management/events'),
    new CardManagementItemModel('face','calendars','/management/calendars'),
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
