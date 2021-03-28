import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goStartRecipe(){
    this.router.navigateByUrl('/tabs/tab1/start-recipe');
  }
}
