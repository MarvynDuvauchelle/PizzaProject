import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza';

@Component({
  selector: 'page-pizza',
  templateUrl: 'pizza.html'
})

export class PizzaPage {

  id: String;
  pizza: any;
  constructor(public navCtrl: NavController, public PizzaService: PizzaService, public NavParams: NavParams){
    this.id = NavParams.get('id');
    this.pizza = Pizza
  }

    ionViewDidLoad() {
      this.PizzaService.getOnePizza(this.id).then(data => {
        this.pizza = data;
        console.log(data);
     });
  }

}
