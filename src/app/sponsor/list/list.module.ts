import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { SponsorCardModule } from "../sponsor-card/sponsor-card.module";
import { ListComponent } from "./list.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    SponsorCardModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  exports: [ListComponent],
})
export class ListModule { }
