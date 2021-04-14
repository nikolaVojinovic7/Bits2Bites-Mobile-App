import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Plugins } from "@capacitor/core";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../../data/user.service'
import { AuthService } from '../../guards/auth.service'

const {Storage} = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userEmail: string;
  userPassword: string;

  constructor(
    public alertController: AlertController,
    private router: Router,
    private userService: UserService,
    private authService: AuthService) {}

  ngOnInit() {}

    onSubmit(loginForm:NgForm)
  {
    console.log(loginForm.value);
    this.userEmail = loginForm.value.email
    this.userPassword = loginForm.value.password

    this.authService.login(this.userEmail, this.userPassword).subscribe(
      data => {
        console.log("Login Is a Success: " + data);
        if(data){
          this.router.navigate(['/tabs/tab1']);
        }else{
          alert("Invalid username or password")
        }
      }
    )
  }

  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     message: 'Please check your email for password reset instructions.',
  //     buttons: ['OK'],
  //   });

  //   await alert.present();
  // }

  // login() {
  //   this.saveUser();
  // }

  // saveUser(){
  //   const user = new User(this.userEmail, this.userPassword, "Noah Huboux");
  //   this.setObject(JSON.stringify(user.email), user);
  // }

  // async setObject(key:string, value:any){
  //   await Storage.set(
  //     {
  //       key: "0",
  //       value: JSON.stringify(value)
  //     }
  //   );
  //   this.openNavDashboardPage();
  // }

  // openNavDashboardPage() {
  //   this.router.navigate(['/tabs/tab1']);
  // }
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
