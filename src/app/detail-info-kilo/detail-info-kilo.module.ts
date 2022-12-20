import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailInfoKiloPageRoutingModule } from './detail-info-kilo-routing.module';

import { DetailInfoKiloPage } from './detail-info-kilo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailInfoKiloPageRoutingModule
  ],
  declarations: [DetailInfoKiloPage]
})
export class DetailInfoKiloPageModule {}
