import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-index',
  templateUrl: './account-index.component.html',
  styleUrls:['./account-index.component.scss']
})
export class AccountIndexComponent implements OnInit {

  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}
