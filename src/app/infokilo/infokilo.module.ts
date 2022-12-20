import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfokiloPageRoutingModule } from './infokilo-routing.module';

import { InfokiloPage } from './infokilo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfokiloPageRoutingModule
  ],
  declarations: [InfokiloPage]
})
export class InfokiloPageModule {}
