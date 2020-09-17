import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-wish',
  templateUrl: './card-wish.component.html',
  styleUrls: ['./card-wish.component.scss']
})
export class CardWishComponent implements OnInit {

  @Input() item:any;

  constructor() { }

  ngOnInit(): void {
  }

  
}
