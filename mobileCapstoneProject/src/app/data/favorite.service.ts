import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  readonly ROOT_URL = 'http://localhost:8087/api/favorite';

  constructor(private http: HttpClient) { }

}
