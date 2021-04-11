import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  readonly ROOT_URL = 'http://localhost:8087/api/ingredient/';

  constructor(private http: HttpClient) { }

  getAllIngredients(): any{
    return this.http.get(this.ROOT_URL + 'allIngredients')
  }

  deleteIngredient(id: number): any{
    return this.http.get(this.ROOT_URL + 'deleteIngredient/' + id)
  }

}
