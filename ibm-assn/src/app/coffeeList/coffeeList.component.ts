import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {CoffeeInterface} from "../type/coffee.interface";
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
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  coffees$: Observable<RealCoffeeInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(selectCoffeeIsloading));
    this.coffees$ = this.store.pipe(select(selectAllCoffee));
    this.error$ = this.store.pipe(select(selectCoffeeError));
    console.log(this.error$);
    //console.log(this.coffees$);
  }

  ngOnInit() {
    this.store.dispatch(Action.loadCoffeeList());

  }

  /*
  @Input() coffList : CoffeeInterface[] | undefined;
  @Input() realCoffeeList : RealCoffeeInterface[] | undefined;
  @Output() removeUserParent = new EventEmitter<number>();
  @Output() addUserParent = new EventEmitter<string>();

  newName : string = '';


  testCoffee = 'This is a cup of coffee only for test';
  testCoffeeList = ['s','a','d','f'];
  removeUser(id: number) : void {
    console.log("coffee "+ id + "is removed");
    if (this.coffList != undefined){
      this.coffList = this.coffList.filter( OBJ => OBJ.id != id)
    }
  }

  addUsers() : void {
    this.addUserParent.emit(this.newName);
    this.newName = "";
  }

  /* Old addUser method
  addUsers() : void {
    console.log("hit addUsers()")
    let id = this.coffList?.length;
    if(id != undefined){
      let newCoffee = {
        id: (id as number) + 1,
        name: this.newName,
        type: 'new added'
      };
      this.coffList?.push(newCoffee);
    }
    this.newName = "";
  }


  setUserName(event: any) : void {
    let name = event.target as HTMLInputElement;
    this.newName = name.value;
    console.log(this.newName)
  }

  */
}
