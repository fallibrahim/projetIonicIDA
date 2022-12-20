import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDemandeDepensePage } from './edit-demande-depense.page';

const routes: Routes = [
  {
    path: '',
    component: EditDemandeDepensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDemandeDepensePageRoutingModule {}
