import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailDepensePage } from './detail-depense.page';

const routes: Routes = [
  {
    path: '',
    component: DetailDepensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailDepensePageRoutingModule {}
