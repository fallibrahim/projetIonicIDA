import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDemandeDepensePageRoutingModule } from './add-demande-depense-routing.module';

import { AddDemandeDepensePage } from './add-demande-depense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDemandeDepensePageRoutingModule
  ],
  declarations: [AddDemandeDepensePage]
})
export class AddDemandeDepensePageModule {}
