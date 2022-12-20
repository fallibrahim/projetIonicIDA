import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtatFinancierPageRoutingModule } from './etat-financier-routing.module';

import { EtatFinancierPage } from './etat-financier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtatFinancierPageRoutingModule
  ],
  declarations: [EtatFinancierPage]
})
export class EtatFinancierPageModule {}
