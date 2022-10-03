import {CoffeeListStatesInterface} from "./coffeeListStates.interface";
import {coffeeReducer} from "../store/coffees/coffeeList.reducer";

export interface AppStateInterface{
  coffeeListState: CoffeeListStatesInterface;
}

export const AppReducer = {
  coffeeReducer: coffeeReducer
}
