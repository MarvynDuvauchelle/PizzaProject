import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IngredientService } from '../../providers/ingredient-service/ingredient-service';
import { NavParams, NavController } from 'ionic-angular';
import { IngredientListPage } from '../ingredient/ingredientList';

@Component({
  selector: 'page-ingredientFrom',
  templateUrl: 'ingredientForm.html'
})
export class IngredientFormPage {

  private id: String;
  private ingredientForm: FormGroup;
  private formModel: any;
  private ingredients: any;
  
  constructor(private ingredientService: IngredientService, public navParams: NavParams, public navCtrl: NavController) {
    this.id = navParams.get('ingredient_id');
  }

  ionViewDidLoad() {
    
    this.ingredientForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    })
    if (this.id) {
      // On modifie un ingrédient
      this.ingredientService.getOneIngredient(this.id).then(data => {
        console.log(data);
        this.ingredientForm.patchValue(data);
      });
    }
  }

  onSubmit() {
    console.log(this.ingredientForm.value);
    this.formModel = this.ingredientForm.value;
    if (this.id) {
      this.ingredientService.updateIngredient(this.id, this.formModel).then(data => {
        console.log(data);
      });
      this.navCtrl.push(IngredientListPage);
    } else {
      this.ingredientService.addIngredient(this.formModel).then(data => {
        console.log(data);
      });
      this.navCtrl.push(IngredientListPage);
    };
  }

  onDelete() {
    this.ingredientService.deleteIngredient(this.id).then(data => {
      console.log(data);
    });
    this.navCtrl.push(HomePage);
  }
  
}
