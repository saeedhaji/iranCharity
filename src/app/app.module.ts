import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreCharityModule } from "./core-charity";
import { HttpClientModule } from "@angular/common/http";
import { MatNativeDateModule } from "@angular/material/core";
// import { ServerTestDirective } from "./server-test/server-test.directive";
// import {MatDialogModule} from '@angular/material/dialog';
// import { ServerTestModule } from "./server-test/server-test.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreCharityModule,
    HttpClientModule,
    MatNativeDateModule,
    // MatDialogModule,
    // ServerTestModule
  

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
