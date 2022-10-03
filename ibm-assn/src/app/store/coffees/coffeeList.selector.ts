import {AppStateInterface} from "../../type/appState.interface";
import {createSelector} from "@ngrx/store";
import {CoffeeListStatesInterface} from "../../type/coffeeListStates.interface";

export const selectCoffeeState = (state: AppStateInterface) => state.coffeeListState;

//export const dmAllCoffee = (state: CoffeeListStatesInterface) => state.coffeeLists
//export const selectAllCoffee = createSelector(dmAllCoffee, (cstate) => cstate);
export const selectAllCoffee = createSelector(selectCoffeeState, (cstate) => cstate.coffeeLists);

//export const dmIsLoading = (state: CoffeeListStatesInterface) => state.isLoading
//export const selectCoffeeIsloading = createSelector(dmIsLoading, (cstate) => cstate);
export const selectCoffeeIsloading = createSelector(selectCoffeeState, (cstate) => cstate.isLoading);

//export const dmCoffeeError = (state: CoffeeListStatesInterface) => state.errMsg
//export const selectCoffeeError = createSelector(dmCoffeeError, (cstate) => cstate);
export const selectCoffeeError = createSelector(selectCoffeeState, (cstate) => cstate.errMsg);
