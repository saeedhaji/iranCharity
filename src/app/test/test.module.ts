import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from "@angular/material/divider";
import { TestDirective } from './test.directive';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const MATEREAL_MODULE=[
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatChipsModule,
  MatBadgeModule,
  MatMenuModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatSnackBarModule
]



@NgModule({
  declarations: [TestComponent, TestDirective],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ...MATEREAL_MODULE

  ],
  exports: [TestComponent]
})
export class TestModule { }
