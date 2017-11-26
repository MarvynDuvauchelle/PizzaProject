import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { IngredientService } from '../../providers/ingredient-service/ingredient-service';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pizzaFrom',
  templateUrl: 'pizzaForm.html'
})
export class PizzaFormPage {

  private id: String;
  private pizzaForm: FormGroup;
  private formModel: any;
  private ingredients: any;
  
  constructor(private pizzaService: PizzaService, private ingredientService: IngredientService, public NavParams: NavParams) {
  }

  ionViewDidLoad() {
    this.id = this.NavParams.get('id');
    this.pizzaForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      picture: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      ingredients: new FormControl('', [Validators.required])
    })
    if (this.id) {
      // On modifie une pizza

    } else {
      // On ajoute une pizza

    }
    this.ingredientService.getIngredients().then(data => {
      this.ingredients = data;
      console.log(this.ingredients);
    });;
  }

  onSubmit() {
    console.log(this.pizzaForm.value);
    this.formModel = this.pizzaForm.value;
    //if (this.id) {
     // this.pizzaService.edit(this.formModel).subscribe(data => {
    //    console.log(data);
    //  });
    //} else {
//      this.pizzaService.addPizza(this.formModel).then(data => {
//        console.log(data);
//      });
    //};
  }
  
}
