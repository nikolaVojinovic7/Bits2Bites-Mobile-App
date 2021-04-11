import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PantryPage } from './pantry.page';
import { IonicSelectableModule } from 'ionic-selectable';

import { PantryPageRoutingModule } from './pantry-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PantryPage }]),
    PantryPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [PantryPage]
})
export class PantryPageModule {}
