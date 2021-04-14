import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn = false
  constructor() { }

  //Login
  login(userName: string, password: string): Observable<boolean>
  {
      this.isUserLoggedIn = userName == 'admin@123.com' && password == '123';
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

      return of(this.isUserLoggedIn).pipe(
          delay(1000),
          tap(val => {
            console.log("Is User Authentication is successful: " + val);
          })
        );
  }

  logout(){
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }

  isValid():boolean{
    let storeData = localStorage.getItem("isUserLoggedIn");
    console.log("StoreData: " + storeData);

    if( storeData != null && storeData == "true")
    {
      this.isUserLoggedIn = true;
    }else{
      this.isUserLoggedIn = false;
    }

    return this.isUserLoggedIn;
  }
}
