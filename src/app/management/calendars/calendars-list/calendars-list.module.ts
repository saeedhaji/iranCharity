import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarsListRoutingModule } from './calendars-list-routing.module';
import { CalendarsListComponent } from './calendars-list.component';


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
import { CalendarsAddModule } from "../calendars-add/calendars-add.module";
import { CalendarsDetailModule } from "../calendars-detail/calendars-detail.module";
import { CalendarsEditModule } from "../calendars-edit/calendars-edit.module";
import { CalendarsShowModule } from "../calendars-show/calendars-show.module";





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
  declarations: [CalendarsListComponent],
  imports: [
    CommonModule,
    CalendarsListRoutingModule,
    CalendarsAddModule,
    CalendarsDetailModule,
    CalendarsEditModule,
    CalendarsShowModule,
    
    ... MATERIAL_MODULES, 
    FormsModule ,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class CalendarsListModule { }
