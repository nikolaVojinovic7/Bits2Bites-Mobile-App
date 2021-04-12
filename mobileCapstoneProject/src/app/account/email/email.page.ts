import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from "@capacitor/core";
import { UserService } from '../../data/user.service'

const {Storage} = Plugins;

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {

  userData: User[];
  email: string;
  fullName: string;
  password: string;
  userEmail: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.readUsers()
  }

  saveEmail(){
    this.changeEmail(this.email);

    this.router.navigateByUrl("/tabs/account")
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

  async changeEmail(key) {
    await Storage.clear();
    this.saveUser();

    let user = {username: this.fullName, email: this.userEmail, password: this.password};
    
    this.userService.updateUser(this.email, user);
  }


  saveUser(){
    const user = new User(this.userEmail, this.password, this.fullName);
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
