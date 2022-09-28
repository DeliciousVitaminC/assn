import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CoffeeInterface} from "../type/coffee.interface";
import {Observable} from "rxjs";

@Injectable()
export class CoffeeService {
  constructor(private http: HttpClient) {
  }

  getCoffee() : Observable<CoffeeInterface[]> {
    return this.http.get<CoffeeInterface[]>('http://localhost:3000/coffeeList');
  }

  deleteCoffee(id: number) : Observable<{}> {
    return this.http.delete('http://localhost:3000/coffeeList/'+id);
  }

  /*
  addCoffee(name: string) : Observable<{}> {
    return this.http.post('http://localhost:3000/coffeeList/'+name);
  }

   */

}
