import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartRecipePageRoutingModule } from './start-recipe-routing.module';

import { StartRecipePage } from './start-recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartRecipePageRoutingModule
  ],
  declarations: [StartRecipePage]
})
export class StartRecipePageModule {}
