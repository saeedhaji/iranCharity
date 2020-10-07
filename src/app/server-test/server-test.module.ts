import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerTestRoutingModule } from './server-test-routing.module';
import { ServerTestComponent } from './server-test.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from "@angular/material/dialog";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {  MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';




const MATERIAL_MODULE=[
  MatBadgeModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatDialogModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatGridListModule,
  MatListModule,
  MatCheckboxModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatStepperModule,
  MatToolbarModule

];

@NgModule({
  declarations: [ServerTestComponent, ],
  imports: [
    CommonModule,
    ServerTestRoutingModule,
  FormsModule,
  FlexLayoutModule,
...MATERIAL_MODULE,
ReactiveFormsModule

  ]
})
export class ServerTestModule { }
