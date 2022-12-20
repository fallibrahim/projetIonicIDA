import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailEmployerPageRoutingModule } from './detail-employer-routing.module';

import { DetailEmployerPage } from './detail-employer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailEmployerPageRoutingModule
  ],
  declarations: [DetailEmployerPage]
})
export class DetailEmployerPageModule {}
