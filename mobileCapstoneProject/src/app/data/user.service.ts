import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly ROOT_URL = 'http://localhost:8087/api/public';

  constructor(private http: HttpClient) {}

  handleError(error){
    return throwError(error.message);
  }

  getAllUsers() {
    return this.http.get(this.ROOT_URL + '/allUsers');
  }

  getUserByEmail(email) {
    return this.http.get(this.ROOT_URL + '/users/email/' + email).pipe(
      catchError(this.handleError)
    );
  }

  createUser(form) {
    return this.http.post(this.ROOT_URL + '/createUser', form);
  }

  loginUser(email, password) {
    return this.http.get(`${this.ROOT_URL}/login/${email}&${password}`).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(email, user){
    return this.http.put(this.ROOT_URL + '/updateUser/' + email, user)
  }

}
