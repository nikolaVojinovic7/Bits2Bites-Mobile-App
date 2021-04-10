import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RecipeService } from '../../data/recipe.service'


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
  recipes: any;

  constructor(private router: Router, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getAllRecipes();
  }

  goStartRecipe(){
    this.router.navigateByUrl('/tabs/tab1/start-recipe');
  }
}
