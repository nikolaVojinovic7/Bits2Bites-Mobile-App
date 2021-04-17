import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  readonly ROOT_URL = 'http://localhost:8087/api/recipe';

  constructor(private http: HttpClient) { }

  handleError(error){
    return throwError(error.message);
  }

  getAllRecipes(){
    return this.http.get(this.ROOT_URL + '/allRecipes');
  }

  getSetRecipeByName(title){
    return this.http.get(`${this.ROOT_URL}/getSetRecipeByName/${title}`);
  }

  getRecipeByName(title){
    return this.http.get(`${this.ROOT_URL}/getRecipeByName/${title}`).pipe(
      catchError(this.handleError)
    );
  }

  getSetRecipeContainsName(title){
    return this.http.get(`${this.ROOT_URL}/getSetRecipeContainsName/${title}`);
  }
}
