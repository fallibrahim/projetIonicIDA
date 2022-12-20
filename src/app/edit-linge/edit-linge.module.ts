import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditLingePageRoutingModule } from './edit-linge-routing.module';

import { EditLingePage } from './edit-linge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditLingePageRoutingModule
  ],
  declarations: [EditLingePage]
})
export class EditLingePageModule {}
