import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  readonly ROOT_URL = 'http://localhost:8087/api/recipe';

  constructor(private http: HttpClient) { }

  getAllRecipes(){
    return this.http.get(this.ROOT_URL + '/allRecipes')
  }
}
