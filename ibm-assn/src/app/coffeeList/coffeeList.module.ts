import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CoffeeListComponent} from "./coffeeList.component";
import {StoreModule} from "@ngrx/store";
import {coffeeReducer} from "../store/coffees/coffeeList.reducer";
import {coffeeEffects} from "../store/coffees/coffeeList.effects";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [CoffeeListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('dmCoffee', coffeeReducer),
    EffectsModule.forFeature([coffeeEffects])
  ],
  exports: [CoffeeListComponent]
})
export class CoffeeListModule {}
