import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDemandeDepensePage } from './add-demande-depense.page';

const routes: Routes = [
  {
    path: '',
    component: AddDemandeDepensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDemandeDepensePageRoutingModule {}
