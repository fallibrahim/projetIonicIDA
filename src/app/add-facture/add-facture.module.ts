import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFacturePageRoutingModule } from './add-facture-routing.module';

import { AddFacturePage } from './add-facture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFacturePageRoutingModule
  ],
  declarations: [AddFacturePage]
})
export class AddFacturePageModule {}
