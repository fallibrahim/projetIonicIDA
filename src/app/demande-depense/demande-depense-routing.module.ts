import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeDepensePage } from './demande-depense.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeDepensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeDepensePageRoutingModule {}
