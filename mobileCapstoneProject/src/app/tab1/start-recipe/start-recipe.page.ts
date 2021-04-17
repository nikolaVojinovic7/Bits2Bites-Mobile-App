import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RecipeService} from '../../data/recipe.service';
import {Recipe} from "../../models/recipe";
import {Observable} from "rxjs";
import {FavoriteService} from "../../data/favorite.service";

@Component({
  selector: 'app-start-recipe',
  templateUrl: './start-recipe.page.html',
  styleUrls: ['./start-recipe.page.scss'],
})
export class StartRecipePage implements OnInit {
  recipe: Recipe;


  constructor(private router: Router, private recipeService: RecipeService, private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.recipeService.getRecipeByName(history.state.recipeTitle).subscribe((data) =>{
      this.recipe = (data as Recipe);
      console.log(this.recipe);
  });
  }

  favoriteRecipe(){
    this.favoriteService.getAllFavorites();
    this.router.navigateByUrl('/tabs/favorites', { state: { favID: this.recipe.id } });
  }

}
