import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEmployerPageRoutingModule } from './add-employer-routing.module';

import { AddEmployerPage } from './add-employer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEmployerPageRoutingModule
  ],
  declarations: [AddEmployerPage]
})
export class AddEmployerPageModule {}
