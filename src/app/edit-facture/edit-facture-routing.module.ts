import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFacturePage } from './edit-facture.page';

const routes: Routes = [
  {
    path: '',
    component: EditFacturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFacturePageRoutingModule {}
