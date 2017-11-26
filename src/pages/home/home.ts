import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { PizzaPage } from '../pizza/pizza';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pizzas: any;

  constructor(public navCtrl: NavController, public PizzaService: PizzaService) {

  }

  ionViewDidLoad() {
    this.PizzaService.getPizzas().then(data => {
      console.log(data);
      this.pizzas = data;
    });
  }

  goPizzaDetail(id) {
    this.navCtrl.push(PizzaPage, {
      id: id
    });
  }

}