import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ibm-assn';
  testCoffeeObj = [
    {
      id: 1,
      name: 's',
      type: 'aha'
    },
    {
      id: 2,
      name: 'a',
      type: 'ahaha'
    },
    {
      id: 3,
      name: 'd',
      type: 'ahahaha'
    },
    {
      id: 4,
      name: 'f',
      type: 'ahahahaha'
    }
  ];
  removeUserGG(id: number) : void {
    console.log("coffee "+ id + "is removed");
    if (this.testCoffeeObj != undefined){
      this.testCoffeeObj = this.testCoffeeObj.filter( OBJ => OBJ.id != id)
    }
  }

  addUsersGG(newName: string) : void {
    console.log("hit addUsers()")
    let id = this.testCoffeeObj?.length;
    if(id != undefined){
      let newCoffee = {
        id: (id as number) + 1,
        name: newName,
        type: 'new added'
      };
      this.testCoffeeObj?.push(newCoffee);
    }
  }
}
