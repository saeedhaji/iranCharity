import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { ChatModule } from "src/app/core-charity/chat/chat.module";



@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    ChatModule
  ],
  exports: [DetailComponent]
})
export class DetailModule { }
