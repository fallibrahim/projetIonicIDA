import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFacturePage } from './add-facture.page';

const routes: Routes = [
  {
    path: '',
    component: AddFacturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFacturePageRoutingModule {}
