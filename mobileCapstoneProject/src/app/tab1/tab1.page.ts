import {Component, Input, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {RecipeService} from '../data/recipe.service';
import {SearchResultPage} from './search-result/search-result.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titleName: string;
  recipes: any;

  constructor(private router: Router, private recipeService: RecipeService) {}

  setTitleName(title: string){
    this.titleName = title;
  }

  goSearchRecipe(){
    if (this.titleName != null){
      this.titleName = this.titleName.toLowerCase();
    }
    this.router.navigateByUrl('/tabs/tab1/search-result', { state: { titleName: this.titleName } });
  }


}

