import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRoutingModule } from './password-routing.module';
import { PasswordComponent } from './password.component';


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
  MatTabsModule
];

@NgModule({
  declarations: [PasswordComponent],
  imports: [
    CommonModule,
    PasswordRoutingModule,
    ... MATERIAL_MODULES, 
    FormsModule ,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class PasswordModule { }
