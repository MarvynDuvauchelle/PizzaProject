import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IngredientService } from '../../providers/ingredient-service/ingredient-service';
import { IngredientFormPage } from '../ingredientForm/ingredientForm';

@Component({
  selector: 'page-ingredient-list',
  templateUrl: 'ingredientList.html'
})

export class IngredientListPage {

  ingredients: any;

  constructor(public navCtrl: NavController, public IngredientService: IngredientService) {

  }

  ionViewDidLoad() {
    this.IngredientService.getIngredients().then(data => {
      console.log(data);
      this.ingredients = data;
    });
  }

  goIngredientForm(id) {
    this.navCtrl.push(IngredientFormPage, {
      ingredient_id: id
    });
  }

}
