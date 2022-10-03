import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {CoffeeService} from "../../service/coffee.service";
import * as CoffeeActions from "./coffeeList.action"

@Injectable()
export class coffeeEffects {
  constructor(
    private action$: Actions,
    private coffeeService: CoffeeService
  ) {}

  loadCoffeeAPI$ = createEffect( () =>
    this.action$.pipe(
      ofType(CoffeeActions.loadCoffeeList),
      mergeMap(() =>
      {
        return this.coffeeService.getRealCoffee(50).pipe(map((coffeeList) => CoffeeActions.loadCoffeeListSuccess({coffeeList})),
          catchError( err => of(CoffeeActions.loadCoffeeListFailure({err: err.message()}))))
      })
    ))
}
