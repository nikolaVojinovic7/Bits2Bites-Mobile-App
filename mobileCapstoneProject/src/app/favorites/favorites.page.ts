import { Component, OnInit  } from '@angular/core';
import { UserService } from '../data/user.service'
import {FavoriteService} from "../data/favorite.service";
import {RecipeService} from "../data/recipe.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss']
})
export class FavoritesPage implements OnInit {
    constructor(private userService: UserService, private favoriteService: FavoriteService, private recipeService: RecipeService, private router: Router) {}

    userEmail:string;
    name = "";
    favorites: any;

    ngOnInit(): void {
      this.userEmail = localStorage.getItem('user');
      this. favorites = this.favoriteService.getAllFavorites();
    }

  goStartRecipe(name: string){
    this.router.navigateByUrl('/tabs/tab1/start-recipe', { state: { recipeTitle: name } });
  }

    //testing out the api with the local Storage ver
    getUser(email){
      this.userService.getUserByEmail(email).subscribe((data) => {
        let obj = <any>data;
        this.name = obj.username;
      })
    }
}
