import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorRoutingModule } from './sponsor-routing.module';
import { SponsorComponent } from './sponsor.component';
import { ListModule } from "./list/list.module";
import { DetailModule } from "./detail/detail.module";
import { AddModule } from "./add/add.module";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [SponsorComponent],
  imports: [
    CommonModule,
    SponsorRoutingModule,
    ListModule,
    DetailModule,
    AddModule,
    HttpClientModule


  ]
})
export class SponsorModule { }
