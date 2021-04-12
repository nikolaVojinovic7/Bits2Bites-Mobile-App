import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly ROOT_URL = 'http://localhost:8087/api/public';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(this.ROOT_URL + '/allUsers');
  }

  createUser(form) {
    return this.http.post(this.ROOT_URL + '/createUser', form);
  }

  loginUser(email, password) {
    return this.http.get(`${this.ROOT_URL}/login/${email}&${password}`);
  }

  updateUser(email, user){
    return this.http.put(this.ROOT_URL + '/updateUser/' + email, user)
  }

}
