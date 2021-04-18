import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { UserService } from '../data/user.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn = false;
  isValidLogin: Observable<any>
  constructor(private userService: UserService,private router: Router,) { }

  login(email: string, password: string): Observable<boolean>{
    this.userService.loginUser(email, password).subscribe((data) =>{
      let obj = <boolean>data;
      this.isUserLoggedIn = obj;
      console.log(this.isUserLoggedIn)
        if(this.isUserLoggedIn == true){
          localStorage.setItem('isUserLoggedIn', "true");
          localStorage.setItem('user', email)
          this.router.navigate(['/tabs/tab1']);
        }
      }, (error) =>{
        localStorage.setItem('isUserLoggedIn', "false");
        console.log('ERROR IS:   ' + error);
        alert("Invaild" + error)
      })

    //this is from the full-stack lab not 100% how it work but app crashes without it
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
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
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
