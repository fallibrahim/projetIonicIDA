import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailDepensePageRoutingModule } from './detail-depense-routing.module';

import { DetailDepensePage } from './detail-depense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailDepensePageRoutingModule
  ],
  declarations: [DetailDepensePage]
})
export class DetailDepensePageModule {}
