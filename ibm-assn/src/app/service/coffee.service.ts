import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CoffeeInterface} from "../type/coffee.interface";
import {map} from 'rxjs/operators'
import {Observable} from "rxjs";
import {RealCoffeeInterface} from "../type/real.coffee.interface";

@Injectable()
export class CoffeeService {
  constructor(private http: HttpClient) {
  }

  getCoffee() : Observable<CoffeeInterface[]> {
    return this.http.get<CoffeeInterface[]>('http://localhost:3000/coffeeList').pipe(
      map( (coffe: CoffeeInterface[]) => {
        return coffe.map( cf => ({
          id: cf.id,
          name: cf.name,
          type : cf.type
        }))
      })
    );
  }

  getRealCoffee(size: number) : Observable<RealCoffeeInterface[]> {
    return this.http.get<RealCoffeeInterface[]>('https://random-data-api.com/api/coffee/random_coffee?size='+size).pipe(
      map((rCoffee: RealCoffeeInterface[]) =>{
        return rCoffee.map(rcf => ({
          id: rcf.id,
          uid: rcf.uid,
          blend_name: rcf.blend_name,
          origin: rcf.origin,
          variety: rcf.variety,
          notes: rcf.notes,
          intensifier: rcf.intensifier
        }))
      })
    )
  }

  deleteCoffee(id: number) : Observable<{}> {
    return this.http.delete('http://localhost:3000/coffeeList/'+id);
  }

  addCoffee(name: string) : Observable<{}> {
    let id = Math.random();
    let addOn = {
      id : id,
      name: name,
      type: "new created"
    }
    return this.http.post('http://localhost:3000/coffeeList/', addOn);
  }
}
