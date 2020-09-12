import { Component, OnInit } from '@angular/core';


interface  CardListItemInterface{
  img:string;
  title:string;
  price:string;
  place:string;
  icon:string;
}

class CardListItemModel implements CardListItemInterface{
  img='';
  title='';
  price='';
  place='';
  icon='';

constructor(
  img:string,
  title:string,
  price:string,
  place:string,
  icon:string ,
){
  this.img= img;
  this.title=title;
  this.price=price;
  this.place=place;
  this.icon=icon;
}
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  cardList:CardListItemInterface[]=[

    new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
