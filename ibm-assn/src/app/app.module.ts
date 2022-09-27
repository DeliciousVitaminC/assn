import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoffeeListComponent} from "./coffeeList/coffeeList.component";
import {CoffeeListModule} from "./coffeeList/coffeeList.module";

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
