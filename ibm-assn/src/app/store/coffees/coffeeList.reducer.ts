import {CoffeeListStatesInterface} from "../../type/coffeeListStates.interface";
import {createReducer, on} from "@ngrx/store";
import * as Action from "./coffeeList.action";

export const initialState: CoffeeListStatesInterface = {
  isLoading: false,
  coffeeLists: [],
  errMsg: null
};

export const coffeeReducer = createReducer(
  initialState,
  on(Action.loadCoffeeList, (state) => ({...state, isLoading: true})),
  on(Action.loadCoffeeListSuccess, (state, {coffeeList}) => ({
    ...state,
    coffeeLists: coffeeList,
    isLoading: false
  })),
  on(Action.loadCoffeeListFailure, (state, {err}) => ({
    ...state,
    errMsg: err,
    isLoading: false
  }))
);
