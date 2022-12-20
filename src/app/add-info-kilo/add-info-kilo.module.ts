import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddInfoKiloPageRoutingModule } from './add-info-kilo-routing.module';

import { AddInfoKiloPage } from './add-info-kilo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddInfoKiloPageRoutingModule
  ],
  declarations: [AddInfoKiloPage]
})
export class AddInfoKiloPageModule {}
