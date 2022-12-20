import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDemandeDepensePageRoutingModule } from './edit-demande-depense-routing.module';

import { EditDemandeDepensePage } from './edit-demande-depense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDemandeDepensePageRoutingModule
  ],
  declarations: [EditDemandeDepensePage]
})
export class EditDemandeDepensePageModule {}
