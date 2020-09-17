import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CardWishModule } from "../card-wish/card-wish.module";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    CardWishModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [ListComponent]
})
export class ListModule { }
