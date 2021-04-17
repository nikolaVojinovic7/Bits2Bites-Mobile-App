import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { RecipeService } from '../../data/recipe.service';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
  recipes: any;
  title: string;
  titleName2: string;
  recipe: any;

  constructor(private router: Router, private recipeService: RecipeService) { }

  ngOnInit(): void {
    if (history.state.titleName == null){
      this.title = 'xyz';
    }else{
      this.title = history.state.titleName;
    }
    this.recipes = this.recipeService.getSetRecipeContainsName(this.title);
  }

  goStartRecipe(name: string){
    this.recipe = this.recipeService.getRecipeByName(name);
    this.router.navigateByUrl('/tabs/tab1/start-recipe', { state: { recipeTitle: name } });
  }

  goSearchRecipe2(){
    if (this.titleName2 != null){
      this.title = this.titleName2.toLowerCase();
    }
    console.log(this.title);
    this.recipes = this.recipeService.getSetRecipeContainsName(this.title);
  }
}
