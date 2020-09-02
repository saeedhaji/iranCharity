import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorsListRoutingModule } from './sponsors-list-routing.module';
import { SponsorsListComponent } from './sponsors-list.component';
import { SponsorsAddModule } from "../sponsors-add/sponsors-add.module";
import { SponsorsDetailModule } from "../sponsors-detail/sponsors-detail.module";
import { SponsorsEditModule } from "../sponsors-edit/sponsors-edit.module";
import { SponsorsShowModule } from "../sponsors-show/sponsors-show.module";


import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule,  ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from "@angular/material/divider";
import {MatTableModule} from '@angular/material/table';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule,
  MatSelectModule,
  MatTooltipModule,
  MatTabsModule,
  MatMenuModule,
  MatSidenavModule,
  MatDividerModule,
  MatTableModule
];

@NgModule({
  declarations: [SponsorsListComponent],
  imports: [
    CommonModule,
    SponsorsListRoutingModule,
    SponsorsShowModule,
    SponsorsEditModule,
    SponsorsDetailModule,
    SponsorsAddModule,
    ... MATERIAL_MODULES, 
    FormsModule ,
    FlexLayoutModule,
    ReactiveFormsModule,


  ],
  exports: [SponsorsListComponent]
})
export class SponsorsListModule { }
