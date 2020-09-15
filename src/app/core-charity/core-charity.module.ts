import { NgModule } from '@angular/core';
import { CoreCharityComponent } from './core-charity.component';
import { LocationModule, NavigationModule } from "./components";


const COMPONENTS = [
  LocationModule,
  NavigationModule
];

@NgModule({
  declarations: [CoreCharityComponent],
  imports: [
    ...COMPONENTS
  ],
  exports:[
    ...COMPONENTS
  ]
})
export class CoreCharityModule { }
