import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './users-list.component';

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
import { UsersAddModule } from "../users-add/users-add.module";
import {MatTableModule} from '@angular/material/table';
import { UsersDetailModule } from "../users-detail/users-detail.module";
import { UsersEditModule } from "../users-edit/users-edit.module";

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
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    ... MATERIAL_MODULES, 
    FormsModule ,
    FlexLayoutModule,
    ReactiveFormsModule,
    UsersAddModule,
    UsersDetailModule,
    UsersEditModule
  ],
  exports: [UsersListComponent]
})
export class UsersListModule { }
