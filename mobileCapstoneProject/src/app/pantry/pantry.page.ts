import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { IngredientService } from '../data/ingredient.service';
import { PantryService } from '../data/pantry.service';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-pantry',
  templateUrl: 'pantry.page.html',
  styleUrls: ['pantry.page.scss'],
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
  userEmail = localStorage.getItem('user');

  constructor(private ingredientService: IngredientService, private pantryService: PantryService) {}

  ngOnInit(): void {
    this.getIngredients();
    this.getPantry();
  }

  getPantry(){
    this.pantryService
    .getPantry(this.userEmail)
    .subscribe((data:any[]) => (this.categorizePantry(data)));
  }

  categorizePantry(data){
    data.forEach(element => {
      if (element.ingredient.category == 'dairy') {
        this.dairy.push(element.ingredient);
      }
      if (element.ingredient.category == 'vegetables') {
        this.vegetables.push(element.ingredient);
      }
      if (element.ingredient.category == 'fruits') {
        this.fruits.push(element.ingredient);
      }
      if (element.ingredient.category == 'grains') {
        this.grains.push(element.ingredient);
      }
      if (element.ingredient.category == 'meat') {
        this.meat.push(element.ingredient);
      }
      if (element.ingredient.category == 'seafood') {
        this.seafood.push(element.ingredient);
      }
      if (element.ingredient.category == 'spices') {
        this.spices.push(element.ingredient);
      }
      if (element.ingredient.category == 'sweeteners') {
        this.sweeteners.push(element.ingredient);
      }
      if (element.ingredient.category == 'nuts') {
        this.nuts.push(element.ingredient);
      }
      if (element.ingredient.category == 'oils') {
        this.oils.push(element.ingredient);
      }
      if (element.ingredient.category == 'sauces') {
        this.sauces.push(element.ingredient);
      }
      if (element.ingredient.category == 'beverages') {
        this.beverages.push(element.ingredient);
      }
      if (element.ingredient.category == 'other') {
        this.other.push(element.ingredient);
      }
    });

  }

  getIngredients(){
    this.ingredientService
    .getAllIngredients()
    .subscribe((data: any[]) => (this.ingredients = data));
  }

  ingredientChange(event: { component: IonicSelectableComponent; value: any }) {
    this.addIngredient(event.value);
  }

  addIngredient(value) {
    this.pantryService.addPantryItem(this.userEmail, value)
    .subscribe((res: any[]) => (console.log(res)));

    if (value.category == 'dairy') {
      this.dairy.push(value);
    }
    if (value.category == 'vegetables') {
      this.vegetables.push(value);
    }
    if (value.category == 'fruits') {
      this.fruits.push(value);
    }
    if (value.category == 'grains') {
      this.grains.push(value);
    }
    if (value.category == 'meat') {
      this.meat.push(value);
    }
    if (value.category == 'seafood') {
      this.seafood.push(value);
    }
    if (value.category == 'spices') {
      this.spices.push(value);
    }
    if (value.category == 'sweeteners') {
      this.sweeteners.push(value);
    }
    if (value.category == 'nuts') {
      this.nuts.push(value);
    }
    if (value.category == 'oils') {
      this.oils.push(value);
    }
    if (value.category == 'sauces') {
      this.sauces.push(value);
    }
    if (value.category == 'beverages') {
      this.beverages.push(value);
    }
    if (value.category == 'other') {
      this.other.push(value);
    }
  }

  deleteIngredient(value) {
    if (value.category == 'dairy') {
      this.dairy = this.dairy.filter((ingredient) => ingredient !== value);
    }
    if (value.category == 'vegetables') {
      this.vegetables = this.vegetables.filter(
        (ingredient) => ingredient !== value
      );
    }
    if (value.category == 'fruits') {
      this.fruits = this.fruits.filter((ingredient) => ingredient !== value);
    }
    if (value.category == 'grains') {
      this.grains = this.grains.filter((ingredient) => ingredient !== value);
    }
    if (value.category == 'meat') {
      this.meat = this.meat.filter((ingredient) => ingredient !== value);
    }
    if (value.category == 'seafood') {
      this.seafood = this.seafood.filter((ingredient) => ingredient !== value);
    }
    if (value.category == 'spices') {
      this.spices = this.spices.filter((ingredient) => ingredient !== value);
    }
    if (value.category == 'sweeteners') {
      this.sweeteners = this.sweeteners.filter(
        (ingredient) => ingredient !== value
      );
    }
    if (value.category == 'nuts') {
      this.nuts = this.nuts.filter(
        (ingredient) => ingredient !== value);
    }
    if (value.category == 'oils') {
      this.oils = this.oils.filter(
        (ingredient) => ingredient !== value);
    }
    if (value.category == 'sauces') {
      this.sauces = this.sauces.filter(
        (ingredient) => ingredient !== value);
    }
    if (value.category == 'beverages') {
      this.beverages = this.beverages.filter(
        (ingredient) => ingredient !== value
      );
    }
    if (value.category == 'other') {
      this.other = this.other.filter(
        (ingredient) => ingredient !== value);
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
