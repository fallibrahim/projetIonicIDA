import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEmployerPageRoutingModule } from './edit-employer-routing.module';

import { EditEmployerPage } from './edit-employer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEmployerPageRoutingModule
  ],
  declarations: [EditEmployerPage]
})
export class EditEmployerPageModule {}
