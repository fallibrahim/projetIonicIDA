import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailDemandeDepensePage } from './detail-demande-depense.page';

const routes: Routes = [
  {
    path: '',
    component: DetailDemandeDepensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailDemandeDepensePageRoutingModule {}
