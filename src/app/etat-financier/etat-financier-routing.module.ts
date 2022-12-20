import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtatFinancierPage } from './etat-financier.page';

const routes: Routes = [
  {
    path: '',
    component: EtatFinancierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtatFinancierPageRoutingModule {}
