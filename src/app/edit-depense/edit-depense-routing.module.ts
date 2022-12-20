import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDepensePage } from './edit-depense.page';

const routes: Routes = [
  {
    path: '',
    component: EditDepensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDepensePageRoutingModule {}
