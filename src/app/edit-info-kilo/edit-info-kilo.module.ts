import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditInfoKiloPageRoutingModule } from './edit-info-kilo-routing.module';

import { EditInfoKiloPage } from './edit-info-kilo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditInfoKiloPageRoutingModule
  ],
  declarations: [EditInfoKiloPage]
})
export class EditInfoKiloPageModule {}
