import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(public alertController: AlertController) {}

  ngOnInit() {}
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Please check your email for password reset instructions.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
