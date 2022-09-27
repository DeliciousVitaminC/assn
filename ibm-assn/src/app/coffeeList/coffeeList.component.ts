import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector:'app-coffee-list',
  templateUrl: './coffeeList.component.html'
})
export class CoffeeListComponent{
  @Input() coffList : { id: number; name: string; type: string; }[] | undefined;
  @Output() removeUserParent = new EventEmitter();
  @Output() addUserParent = new EventEmitter();

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

   */
  setUserName(event: any) : void {
    let name = event.target as HTMLInputElement;
    this.newName = name.value;
    console.log(this.newName)
  }

}
