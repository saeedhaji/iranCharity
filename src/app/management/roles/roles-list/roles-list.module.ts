import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesListRoutingModule } from './roles-list-routing.module';
import { RolesListComponent } from './roles-list.component';
import { RolesShowModule } from "../roles-show/roles-show.module";
import { RolesEditModule } from "../roles-edit/roles-edit.module";
import { RolesDetailModule } from "../roles-detail/roles-detail.module";
import { RolesAddModule } from "../roles-add/roles-add.module";



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
  declarations: [RolesListComponent],
  imports: [
    CommonModule,
    RolesListRoutingModule,
    RolesShowModule,
    RolesEditModule,
    RolesDetailModule,
    RolesAddModule,
    ... MATERIAL_MODULES, 
    FormsModule ,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [RolesListComponent]
})
export class RolesListModule { }
