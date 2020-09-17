import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { FormsModule } from "@angular/forms";
import { LocationModule } from "../location/location.module";
import { LocationComponent } from "../location/location.component";
import {RouterModule} from '@angular/router';

const MATEREAL_MODULE=[
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule
];

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    ...MATEREAL_MODULE,
    FormsModule,
    FlexLayoutModule,
    LocationModule,
    RouterModule
  ],
  exports: [NavigationComponent],
  entryComponents:[
    LocationComponent
  ]
})
export class NavigationModule { }
