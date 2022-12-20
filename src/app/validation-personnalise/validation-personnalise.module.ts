import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationPersonnalisePageRoutingModule } from './validation-personnalise-routing.module';

import { ValidationPersonnalisePage } from './validation-personnalise.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ValidationPersonnalisePageRoutingModule
  ],
  declarations: [ValidationPersonnalisePage]
})
export class ValidationPersonnalisePageModule {}
