import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  readonly ROOT_URL = 'http://localhost:8087/api/favorite';

  constructor(private http: HttpClient) { }

  userEmail: string;

  handleError(error){
    return throwError(error.message);
  }

  getAllFavorites(){
    this.userEmail = localStorage.getItem('user');
    console.log(this.http.get(this.ROOT_URL + `/allFavorites/${this.userEmail}`));
    return this.http.get(this.ROOT_URL + `/allFavorites/${this.userEmail}`);
  }

  addToFavorites(id: number){
    this.userEmail = localStorage.getItem('user');
    console.log(this.http.get(this.ROOT_URL + `/allFavorites/${this.userEmail}`));
    return this.http.get(this.ROOT_URL + `/addFavorite/${this.userEmail}&${id}`);
  }


}
