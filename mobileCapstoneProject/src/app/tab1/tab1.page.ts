import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../data/recipe.service';
import { SearchResultPage } from './search-result/search-result.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  titleName: string;
  recipes: any;

  userEmail: string;

  slideOpts = {
    slidesPerView: 3,
  };
  constructor(private router: Router, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('user');
    this.recipeService.getAllRecipes().subscribe((data) => {
      this.recipes = data;
      console.log({ recipes: data });
    });
  }

  setTitleName(title: string) {
    this.titleName = title;
  }

  goSearchRecipe() {
    if (this.titleName != null) {
      this.titleName = this.titleName.toLowerCase();
    }
    this.router.navigateByUrl('/tabs/tab1/search-result', {
      state: { titleName: this.titleName },
    });
  }

  goToRecipe(recipeId: number, recipe: String) {
    console.log('User clicked: ' + recipe);

    this.router.navigateByUrl('/tabs/tab1/start-recipe', {
      state: { recipeName: recipe, id: recipeId },
    });
  }
}
