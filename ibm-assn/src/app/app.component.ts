import { Component } from '@angular/core';
import {CoffeeInterface} from "./type/coffee.interface";
import {CoffeeService} from "./service/coffee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ibm-assn';
  testCoffeeObj : CoffeeInterface[] = [];
  /*
  testCoffeeObj : CoffeeInterface[] = [
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

   */
  constructor(private coffee: CoffeeService) {
    console.log("OnInitial");
  }

  fetchList() : void {
    this.coffee.getCoffee().subscribe((res:CoffeeInterface[])=>{
      this.testCoffeeObj = res;
    })
  }

  ngOnInit() : void {
    this.fetchList();
  }



  removeUserGG(id: number) : void {
    console.log("coffee "+ id + "is removed");
    if (this.testCoffeeObj != undefined){
      this.testCoffeeObj = this.testCoffeeObj.filter( OBJ => OBJ.id != id)
    }
  }

  removeUserGGAPI(id: number) : void {
    this.coffee.deleteCoffee(id).subscribe(() =>{});
    this.fetchList();
    /*
    if (this.testCoffeeObj != undefined){
    this.testCoffeeObj = this.testCoffeeObj.filter( OBJ => OBJ.id != id)}

     */
  }


  addUsersGG(newName: string) : void {
    console.log("hit addUsers()")
    let id = this.testCoffeeObj?.length;
    if(id != undefined){
      let newCoffee : CoffeeInterface = {
        id: (id as number) + 1,
        name: newName,
        type: 'new added'
      };
      this.testCoffeeObj?.push(newCoffee);
    }
  }


  addUsersGGAPI(newName: string) : void {
    this.coffee.addCoffee(newName).subscribe(()=>{});
    this.fetchList();
  }
}
