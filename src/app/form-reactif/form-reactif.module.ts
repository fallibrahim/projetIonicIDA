import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormReactifPageRoutingModule } from './form-reactif-routing.module';

import { FormReactifPage } from './form-reactif.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormReactifPageRoutingModule
  ],
  declarations: [FormReactifPage]
})
export class FormReactifPageModule {}
