import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-username',
  templateUrl: './username.page.html',
  styleUrls: ['./username.page.scss'],
})
export class UsernamePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  saveUsername(){
    this.router.navigateByUrl('/tabs/account')
  }

}
