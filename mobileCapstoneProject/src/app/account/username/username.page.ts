import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from "@capacitor/core";
import { UserService } from '../../data/user.service'

const {Storage} = Plugins;

@Component({
  selector: 'app-username',
  templateUrl: './username.page.html',
  styleUrls: ['./username.page.scss'],
})
export class UsernamePage implements OnInit {

  userData: User[];
  email: string;
  fullName: string;
  password: string;
  userFullName: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.readUsers()
  }

  saveUsername(){
    this.changeUsername();    
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

  changeUsername() {

    let user = {username: this.userFullName, email: this.email, password: this.password};    

    this.userService.updateUser(this.email, user).subscribe((data) =>{

      this.router.navigateByUrl('/tabs/account')
        
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

