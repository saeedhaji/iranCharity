import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsListRoutingModule } from './events-list-routing.module';
import { EventsListComponent } from './events-list.component';


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
import { EventsShowModule } from "../events-show/events-show.module";
import { EventsDetailModule } from "../events-detail/events-detail.module";
import { EventsAddModule } from "../events-add/events-add.module";
import { EventsEditModule } from "../events-edit/events-edit.module";

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
  declarations: [EventsListComponent],
  imports: [
    CommonModule,
    EventsListRoutingModule,
    EventsShowModule,
    EventsDetailModule,
    EventsAddModule,
    EventsEditModule,
    ... MATERIAL_MODULES, 
    FormsModule ,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [EventsListComponent],
  entryComponents: [EventsListComponent]
})
export class EventsListModule { }
