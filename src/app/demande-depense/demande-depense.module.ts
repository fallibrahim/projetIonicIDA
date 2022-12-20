import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeDepensePageRoutingModule } from './demande-depense-routing.module';

import { DemandeDepensePage } from './demande-depense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeDepensePageRoutingModule
  ],
  declarations: [DemandeDepensePage]
})
export class DemandeDepensePageModule {}
