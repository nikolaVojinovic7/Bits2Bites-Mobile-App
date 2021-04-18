import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Plugins } from "@capacitor/core";
import { UserService } from '../data/user.service'
import { AuthService } from '../guards/auth.service'

const {Storage} = Plugins;

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  userData: User[];
  email: string;
  password: string;
  fullName: string;
  test: {};

  constructor(private router: Router, private authService : AuthService, private userService: UserService) { }

  ngOnInit() {
    this.readUsers();
  }

  ionViewWillEnter() {
    this.readUsers();
  };

  goUsername(){
    this.router.navigateByUrl('/tabs/account/username')
  }

  goEmail(){
    this.router.navigateByUrl('/tabs/account/email')
  }

  goPassword(){
    this.router.navigateByUrl('/tabs/account/password')
  }

  readUsers(){
    this.email = localStorage.getItem('user');    

    this.userService.getUserByEmail(this.email).subscribe((data) =>{

          let obj = <User>data;
          this.fullName = obj.username
        
      }, (error) =>{

        console.log('ERROR IS:   ' + error);
        alert("Invaild" + error)
      })

  }

}

export class User{
  email: string;
  password: string;
  username: string;

  constructor(email: string, password: string, username: string){
    this.email = email;
    this.password = password;
    this.username = username;
  }
}
