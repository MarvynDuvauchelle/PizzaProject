import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../../models/ingredient'
import 'rxjs/add/operator/map';

/*
  Generated class for the IngredientServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IngredientService {

  data: any;
  private readonly url = 'https://pizzaposey-cloned-marvyn.c9users.io/ingredient';

  constructor(public http: HttpClient) {

  }

  getIngredients() {
    let rt: Array<Ingredient> = new Array<Ingredient>();
    return new Promise<Array<Ingredient>>(resolve => {
      this.http.get(this.url).subscribe((data: Array<any>) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          rt.push(new Ingredient(data[i]['_id'], data[i]['name'], data[i]['weight'], data[i]['price']));
        }
        resolve(rt);
      });
    });
  }

  getOneIngredient(id: String) {
    return new Promise(resolve => {
      this.http.get(this.url + "/" + id).subscribe((data: Ingredient) => {
        resolve(data);
      });
    });
  }

  addIngredient(ingredient: Ingredient) {
    return new Promise(resolve => {
      this.http.post(this.url, ingredient).subscribe((data: Ingredient) => {
        resolve(data);
      });
    });
  }

  updateIngredient(id, ingredient) {
    return new Promise(resolve => {
      this.http.put(this.url + "/" + id, ingredient).subscribe((data: Ingredient) => {
        resolve(data);
      });
    });
  }

  deleteIngredient(id: String) {
    return new Promise(resolve => {
      this.http.delete(this.url + "/" + id).subscribe((data: Ingredient) => {
        resolve(data);
      });
    });
  }

}
