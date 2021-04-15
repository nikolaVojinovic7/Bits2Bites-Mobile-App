import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Plugins } from "@capacitor/core";
import { NgForm } from '@angular/forms';
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

  isValid = false;

  constructor(
    public alertController: AlertController, private authService: AuthService) {}

  ngOnInit() {
  }

  onSubmit(loginForm:NgForm){
    this.userEmail = loginForm.value.email
    this.userPassword = loginForm.value.password

    this.authService.login(this.userEmail, this.userPassword)
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Please check your email for password reset instructions.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}

