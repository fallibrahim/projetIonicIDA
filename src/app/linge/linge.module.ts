import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LingePageRoutingModule } from './linge-routing.module';

import { LingePage } from './linge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LingePageRoutingModule
  ],
  declarations: [LingePage]
})
export class LingePageModule {}
