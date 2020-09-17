import { Component, OnInit } from '@angular/core';
import { WishesService } from "../wishes.service";


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


  cardList:any[]=[

    // new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    // new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    // new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    // new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    // new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    // new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    // new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    // new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    // new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
    // new CardListItemModel('./assets/img/wXbhbtrA.jpg','فرش ماشینی گل برجسته طرح ابریشم دوتخته ۶متری','۱,۲۰۰,۰۰۰ تومان',' لحظاتی پیش در چهارصد دستگاه','alternate_email'),
  ];


  constructor(private wishesService:WishesService) { }

  ngOnInit(): void {
    this.getWisheList();
  }

  private getWisheList(){
    this.wishesService.getWishes().subscribe((res:any)=>{
      console.log(res);
      this.cardList = res;
    });
  }

}
