import { Component, OnInit } from '@angular/core';
import { UserService } from '../../data/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  errors = {};
  user: User = {
    username: 'ameroft',
    email: 'emmanuel@gmail.com',
    password: 'e@21',
    confirmPassword: 'e@21',
  };

  ngOnInit() {}
  goLogin() {
    this.router.navigateByUrl('/login');
  }
  handleRegister() {
    if (Object.keys(this.validateRegister()).length == 0) {
      this.userService.createUser(this.user).subscribe((data) => {
        console.log(data);
        this.goLogin();
      });
    } else {
      console.log(this.errors);
    }
  }

  validateRegister() {
    this.errors = {};
    // Name Errors
    if (!this.user.username) {
      this.errors['username'] = 'A username is required.';
    }

    //Email Errors
    if (!this.user.email) {
      this.errors['email'] = 'A email is required.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.user.email)
    ) {
      this.errors['email'] = 'Your email is invalid.';
    }

    if (!this.user.password) {
      //Password Errors
      this.errors['password'] = 'A password is required.';
    } else if (this.user.password.length < 6) {
      this.errors['password'] = 'Your password must be at least 6 characters';
    } else if (this.user.password !== this.user.confirmPassword) {
      this.errors['password'] = 'Password must be matching.';
    }
    return this.errors;
  }
}
