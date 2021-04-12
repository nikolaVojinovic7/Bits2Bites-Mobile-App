import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Plugins } from "@capacitor/core";

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

  constructor(private router: Router) { }

  ngOnInit() {
    this.readUsers();
  }

  goUsername(){
    this.router.navigateByUrl('/tabs/account/username')
  }

  goEmail(){
    this.router.navigateByUrl('/tabs/account/email')
  }

  goPassword(){
    this.router.navigateByUrl('/tabs/account/password')
  }

  async readUsers(){
    this.userData = [];
    const {keys} = await Storage.keys();
    keys.forEach(this.getUser, this)
  }

  async getUser(key){
    const item = await Storage.get({key: "0"});
    let user = JSON.parse(item.value);
    this.userData.push(user);

    this.email = this.userData[0].email;
    this.fullName = this.userData[0].fullName;
  }

  async logout(){
    await Storage.clear();
    this.router.navigateByUrl('/login');
  }

}

export class User{
  email: string;
  password: string;
  fullName: string;

  constructor(email: string, password: string, fullName: string){
    this.email = email;
    this.password = password;
    this.fullName = fullName;
  }
}