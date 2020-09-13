import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectcity-modal',
  templateUrl: './selectcity-modal.component.html',
  styleUrls: ['./selectcity-modal.component.scss']
})
export class SelectcityModalComponent implements OnInit {

  visitedCities:any[]=[
{
  name:'تهران',
},
{
  name:'مشهد',
},
{
  name:'کرج',
},
{
  name:'شیراز',
},
{
  name:'اصفهان',
},
{
  name:'اهواز',
},
{
  name:'تبریز',
},
{
  name:'کرمانشاه',
},
{
  name:'قم'
},
{
  name:'رشت'
}

  ];

  allCities:any[]=[
    {
name:'آبادان'
    },
    {
      name:'آبادان'
    },{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},
    {name:'آبادان'},{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},
    {name:'آبادان'},{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},
    {name:'آبادان'},{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},{name:'آبادان'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
