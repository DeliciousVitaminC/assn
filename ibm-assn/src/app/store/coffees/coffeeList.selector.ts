import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CoffeeListStatesInterface} from "../../type/coffeeListStates.interface";

export const selectCoffeeState = createFeatureSelector<CoffeeListStatesInterface>('dmCoffee');

export const selectAllCoffee = createSelector(selectCoffeeState, (cstate) => {return cstate.coffeeLists});

export const selectCoffeeIsloading = createSelector(selectCoffeeState, (cstate) => {return cstate.isLoading});

export const selectCoffeeError = createSelector(selectCoffeeState, (cstate) => {return cstate.errMsg});
