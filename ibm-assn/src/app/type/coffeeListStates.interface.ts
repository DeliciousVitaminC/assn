import {RealCoffeeInterface} from "./real.coffee.interface";

export interface CoffeeListStatesInterface{
  isLoading: boolean;
  coffeeLists: RealCoffeeInterface[];
  errMsg: string | null;
}
