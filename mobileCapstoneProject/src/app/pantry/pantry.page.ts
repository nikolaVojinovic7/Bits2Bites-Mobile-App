import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { IngredientService } from '../data/ingredient.service';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-pantry',
  templateUrl: 'pantry.page.html',
  styleUrls: ['pantry.page.scss']
})
export class PantryPage {

  ingredients: Ingredient[];
  ingredient: Ingredient;
  dairy: Ingredient[] = [];
  vegetables: Ingredient[] = [];
  fruits: Ingredient[] = [];
  grains: Ingredient[] = [];
  meat: Ingredient[] = [];
  seafood: Ingredient[] = [];
  spices: Ingredient[] = [];
  sweeteners: Ingredient[] = [];
  nuts: Ingredient[] = [];
  oils: Ingredient[] = [];
  sauces: Ingredient[] = [];
  beverages: Ingredient[] = [];
  other: Ingredient[] = [];
  showDairy = false;
  showVegetables = false;
  showFruits = false;
  showGrains = false;
  showMeat = false;
  showSeafood = false;
  showSpices = false;
  showSweeteners = false;
  showNuts = false;
  showOils = false;
  showSauces = false;
  showBeverages = false;
  showOther = false;

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.ingredientService.getAllIngredients()
      .subscribe((data: any[]) => this.ingredients = data);
  }

  ingredientChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.categorizeIngredient(event.value);
  }

  categorizeIngredient(value){
    if (value.category == "dairy"){
      this.dairy.push(value);
    }
    if (value.category == "vegetables"){
      this.vegetables.push(value);
    }
    if (value.category == "fruits"){
      this.fruits.push(value);
    }
    if (value.category == "grains"){
      this.grains.push(value);
    }
    if (value.category == "meat"){
      this.meat.push(value);
    }
    if (value.category == "seafood"){
      this.seafood.push(value);
    }
    if (value.category == "spices"){
      this.spices.push(value);
    }
    if (value.category == "sweeteners"){
      this.sweeteners.push(value);
    }
    if (value.category == "nuts"){
      this.nuts.push(value);
    }
    if (value.category == "oils"){
      this.oils.push(value);
    }
    if (value.category == "sauces"){
      this.sauces.push(value);
    }
    if (value.category == "beverages"){
      this.beverages.push(value);
    }
    if (value.category == "other"){
      this.other.push(value);
    }
  }

 toggleDairy() {
    this.showDairy = !this.showDairy;
 }
 toggleVegetables() {
  this.showVegetables = !this.showVegetables;
}
toggleFruits() {
  this.showFruits = !this.showFruits;
}
toggleGrains() {
  this.showGrains = !this.showGrains;
}
toggleMeat() {
  this.showMeat = !this.showMeat;
}
toggleSeafood() {
  this.showSeafood = !this.showSeafood;
}
toggleSpices() {
  this.showSpices = !this.showSpices;
}
toggleSweeteners() {
  this.showSweeteners = !this.showSweeteners;
}
toggleNuts() {
  this.showNuts = !this.showNuts;
}
toggleOils() {
  this.showOils = !this.showOils;
}
toggleSauces() {
  this.showSauces = !this.showSauces;
}
toggleBeverages() {
  this.showBeverages = !this.showBeverages;
}
toggleOther() {
  this.showOther = !this.showOther;
}

}
