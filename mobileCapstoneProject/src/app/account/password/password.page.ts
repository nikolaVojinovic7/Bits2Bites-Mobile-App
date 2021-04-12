import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from "@capacitor/core";
import { UserService } from '../../data/user.service'

const {Storage} = Plugins;

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  userData: User[];
  email: string;
  fullName: string;
  password: string;
  userPassword: string;
  userPasswordConfirm: string;
  oldPassword: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.readUsers()
  }

  savePassword(){

    if(this.oldPassword == this.password && this.userPassword == this.userPasswordConfirm){
      this.changePassword();

      this.router.navigateByUrl("/tabs/account")
    }
    else{
      alert("Incorrect password");
    }
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
    this.password = this.userData[0].password;
  }

  async changePassword() {
    await Storage.clear();
    this.saveUser();
    console.log(this.userData);

    let user = {username: this.fullName, email: this.email, password: this.userPassword};
    
    this.userService.updateUser(this.email, user);
  }


  saveUser(){
    const user = new User(this.email, this.userPassword, this.fullName);
    this.setObject(JSON.stringify("0"), user);
  }

  async setObject(key:string, value:any){
    await Storage.set(
      {
        key: "0",
        value: JSON.stringify(value)
      }
    );
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
