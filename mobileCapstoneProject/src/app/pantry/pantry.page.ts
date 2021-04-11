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


  showDairy = false;
  showVegetables = false;
  showFruits = false;
  showGrains = false;
  showMeat = false;
  showSeafood = false;
  showSpices = false;
  showSweeteners = false;
  showNuts = false;

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.ingredientService.getAllIngredients()
      .subscribe((data: any[]) => this.ingredients = data);
  }

  ingredientChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('ingredient:', event.value);
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

}
