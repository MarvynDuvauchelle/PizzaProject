import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PizzaPage } from '../pages/pizza/pizza';
import { PizzaFormPage } from '../pages/pizzaForm/pizzaForm';
import { IngredientListPage } from '../pages/ingredient/ingredientList';
import { IngredientFormPage } from '../pages/ingredientForm/ingredientForm';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { PizzaService } from '../providers/pizza-service/pizza-service';
import { IngredientService } from '../providers/ingredient-service/ingredient-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PizzaPage,
    PizzaFormPage,
    IngredientListPage,
    IngredientFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PizzaPage,
    PizzaFormPage,
    IngredientListPage,
    IngredientFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaService,
    IngredientService
  ]
})
export class AppModule {}
