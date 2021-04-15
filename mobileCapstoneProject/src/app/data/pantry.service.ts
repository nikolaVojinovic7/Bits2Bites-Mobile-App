import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class PantryService {
  readonly ROOT_URL = 'http://localhost:8087/api/pantry/';


  constructor(private http: HttpClient) { }

  getPantry(email: string): any{
    return this.http.get(this.ROOT_URL + 'allPantry/' + email)
  }

  addPantryItem(email: string, ingredient: Ingredient): any{
    return this.http.put(this.ROOT_URL + 'addIngredient/' + email, ingredient)
  }

  deletePantryItem(id: number, email: string): any{
    return this.http.delete(this.ROOT_URL + 'deletePantry/' + id + "&" + email)
  }
}
