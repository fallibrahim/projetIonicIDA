import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailDemandeDepensePageRoutingModule } from './detail-demande-depense-routing.module';

import { DetailDemandeDepensePage } from './detail-demande-depense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailDemandeDepensePageRoutingModule
  ],
  declarations: [DetailDemandeDepensePage]
})
export class DetailDemandeDepensePageModule {}
