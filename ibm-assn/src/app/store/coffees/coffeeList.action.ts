import {createAction, props} from "@ngrx/store";
import {RealCoffeeInterface} from "../../type/real.coffee.interface";

export const loadCoffeeList = createAction('[CoffeeList] Load CoffeeList');


export const loadCoffeeListSuccess = createAction(
  '[CoffeeList] Load Success',
  props<{ coffeeList : RealCoffeeInterface[] }>()
);


export const loadCoffeeListFailure = createAction(
  '[CoffeeList] Load Failure',
  props<{ err: string }>()
)


