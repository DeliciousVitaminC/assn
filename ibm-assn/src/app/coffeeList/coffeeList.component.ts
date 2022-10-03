import {Component, OnInit} from "@angular/core";
import {RealCoffeeInterface} from "../type/real.coffee.interface";
import {select, Store} from "@ngrx/store";
import * as Action from "../store/coffees/coffeeList.action";
import {selectAllCoffee, selectCoffeeError, selectCoffeeIsloading} from "../store/coffees/coffeeList.selector";
import {Observable} from "rxjs";
import {AppStateInterface} from "../type/appState.interface";

@Component({
  selector:'app-coffee-list',
  templateUrl: './coffeeList.component.html'
})
export class CoffeeListComponent implements OnInit{
  public isLoading$: Observable<boolean>;
  public error$: Observable<string | null>;
  public coffees$: Observable<RealCoffeeInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(selectCoffeeIsloading));
    this.coffees$ = this.store.pipe(select(selectAllCoffee));
    this.error$ = this.store.pipe(select(selectCoffeeError));
  }

  ngOnInit() {
    this.store.dispatch(Action.loadCoffeeList());

  }
}
