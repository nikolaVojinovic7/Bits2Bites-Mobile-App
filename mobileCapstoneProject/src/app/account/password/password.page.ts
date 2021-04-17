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
    }
    else{
      alert("Incorrect password");
    }
  }

  readUsers(){
    this.email = localStorage.getItem('user');    

    this.userService.getUserByEmail(this.email).subscribe((data) =>{

        let obj = <User>data;
        this.fullName = obj.username
        this.password = obj.password
      
    }, (error) =>{

      console.log('ERROR IS:   ' + error);
      alert("Invaild" + error)
    })
  }

  changePassword() {
    let user = {username: this.fullName, email: this.email, password: this.userPasswordConfirm};    

    this.userService.updateUser(this.email, user).subscribe((data) =>{

      this.router.navigateByUrl("/tabs/account")
        
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
