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

  changeEmail(key) {
    
    let user = {username: this.fullName, email: this.userEmail, password: this.password};    

    this.userService.updateUser(this.email, user).subscribe((data) =>{

      localStorage.setItem('user', this.userEmail)
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
