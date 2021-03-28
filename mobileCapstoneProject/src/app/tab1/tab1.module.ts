import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {
  recipes:Recipe[];

  id:number;
  recipe:string;


  constructor() {

    

    //const rec = new Recipe(this.id, this.recipe);
    //this.setObject(JSON.stringify(rec.id), rec);

    //console.log(this.recipes)
  }

//   async setObject(key:string, value:any){
//     await Storage.set(
//       {
//         key: key,
//         value: JSON.stringify(value)
//       }
//     );
//     this.readUsers();
//   }

//   async readUsers(){
//     this.recipes = [];
//     const {keys} = await Storage.keys();
//     keys.forEach(this.getUser, this)
//   }

//   async getUser(key){
//     const item = await Storage.get({key: key});
//     let rec = JSON.parse(item.value);
//     this.recipes.push(rec);
//   }
 }

export class Recipe{
  id: number;
  recipe: string;

  constructor(id:number, recipe:string){
    this.id = id;
    this.recipe = recipe;
  }
}
