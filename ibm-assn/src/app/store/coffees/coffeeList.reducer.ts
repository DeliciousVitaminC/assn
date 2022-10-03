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
  on(Action.loadCoffeeListSuccess, (state, action) => ({
    ...state,
    coffeeLists: action.coffeeList,
    isLoading: false
  })),
  on(Action.loadCoffeeListFailure, (state, action) => ({
    ...state,
    errMsg: action.err,
    isLoading: false
  }))
);
