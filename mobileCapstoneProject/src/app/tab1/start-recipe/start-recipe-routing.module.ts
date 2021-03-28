import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartRecipePage } from './start-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: StartRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartRecipePageRoutingModule {}
