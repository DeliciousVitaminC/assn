import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoffeeListComponent} from "./coffeeList/coffeeList.component";   //used when use CoffeeListComponent directly in declarations
import {CoffeeListModule} from "./coffeeList/coffeeList.module";
import {HttpClientModule} from "@angular/common/http";
import {CoffeeService} from "./service/coffee.service";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';     //used when import CoffeeListModule as a whole

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoffeeListModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
