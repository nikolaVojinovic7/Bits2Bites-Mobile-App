import { Component } from '@angular/core';

@Component({
  selector: 'app-pantry',
  templateUrl: 'pantry.page.html',
  styleUrls: ['pantry.page.scss']
})
export class PantryPage {

  showDairy = false;
  showVegetables = false;
  showFruits = false;
  showGrains = false;
  showMeat = false;
  showSeafood = false;
  showSpices = false;
  showSweeteners = false;
  showNuts = false;

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

  constructor() {}

}
