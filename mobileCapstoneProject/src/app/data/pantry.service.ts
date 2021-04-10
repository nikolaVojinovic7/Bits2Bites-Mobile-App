import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PantryService {
  readonly ROOT_URL = 'http://localhost:8087/api/pantry';


  constructor(private http: HttpClient) { }
}
