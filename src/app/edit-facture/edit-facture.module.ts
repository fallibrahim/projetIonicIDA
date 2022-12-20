import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFacturePageRoutingModule } from './edit-facture-routing.module';

import { EditFacturePage } from './edit-facture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFacturePageRoutingModule
  ],
  declarations: [EditFacturePage]
})
export class EditFacturePageModule {}
