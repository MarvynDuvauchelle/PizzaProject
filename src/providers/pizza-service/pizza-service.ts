import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../../models/pizza'
import 'rxjs/add/operator/map';

/*
  Generated class for the PizzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PizzaService {

  data: any;
  private readonly url = 'https://pizzaposey-cloned-marvyn.c9users.io/pizza';

  constructor(public http: HttpClient) {

  }

  getPizzas() {
    let rt: Array<Pizza> = new Array<Pizza>();
    return new Promise<Array<Pizza>>(resolve => {
      this.http.get(this.url).subscribe((data: Array<any>) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {

        rt.push(new Pizza(data[i]['_id'], data[i]['name'], data[i]['desc'], data[i]['picture'], data[i]['price'], data[i]['ingredients']));
      }
          resolve(rt);
        });
      });
  }

  getOnePizza(id: String) {
    return new Promise(resolve => {
      this.http.get(this.url + "/" + id).subscribe((data: Pizza) => {
         resolve(data);
      });
    });
  }

  addPizza(pizza: Pizza) {
    return new Promise(resolve => {
      this.http.post(this.url, pizza).subscribe((data: Pizza) => {
        resolve(data);
      });
    });
  }

}
