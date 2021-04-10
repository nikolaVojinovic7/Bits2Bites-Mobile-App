import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatagoryService {
  readonly ROOT_URL = 'http://localhost:8087/api/category';

  constructor(private http: HttpClient) { }

}
