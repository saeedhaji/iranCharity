import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishesRoutingModule } from './wishes-routing.module';
import { WishesComponent } from './wishes.component';


@NgModule({
  declarations: [WishesComponent],
  imports: [
    CommonModule,
    WishesRoutingModule,
    
  ],
  exports: [WishesComponent]
})
export class WishesModule { }
