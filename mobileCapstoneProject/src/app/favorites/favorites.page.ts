import { Component, OnInit  } from '@angular/core';
import { UserService } from '../data/user.service'


@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss']
})
export class FavoritesPage implements OnInit {
    constructor(private userService: UserService) {}

    userEmail:string;
    name = "";

    ngOnInit(): void {
      this.userEmail = localStorage.getItem('user');
    }

    //testing out the api with the local Storage ver
    getUser(email){
      this.userService.getUserByEmail(email).subscribe((data) => {
        let obj = <any>data;
        this.name = obj.username
      })
    }
}
