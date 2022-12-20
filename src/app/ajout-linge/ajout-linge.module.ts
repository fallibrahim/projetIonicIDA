import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutLingePageRoutingModule } from './ajout-linge-routing.module';

import { AjoutLingePage } from './ajout-linge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutLingePageRoutingModule
  ],
  declarations: [AjoutLingePage]
})
export class AjoutLingePageModule {}
