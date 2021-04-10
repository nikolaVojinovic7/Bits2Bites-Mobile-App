import { Component, OnInit  } from '@angular/core';
import { UserService } from '../data/user.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
    results: any;

    test: any;

    constructor(private userData: UserService) {}

    ngOnInit(): void {
      this.results = this.userData.getAllUsers()
    }
}
