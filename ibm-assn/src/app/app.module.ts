import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoffeeListComponent} from "./coffeeList/coffeeList.component";   //used when use CoffeeListComponent directly in declarations
import {CoffeeListModule} from "./coffeeList/coffeeList.module";     //used when import CoffeeListModule as a whole

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoffeeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
