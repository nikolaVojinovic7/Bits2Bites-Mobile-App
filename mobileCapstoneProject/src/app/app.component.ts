import { Component } from '@angular/core';
import { AuthService } from '../app/guards/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isUserLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isUserLoggedIn = this.authService.isValid()
    console.log(`Status : ${this.isUserLoggedIn}`);
  }
}
