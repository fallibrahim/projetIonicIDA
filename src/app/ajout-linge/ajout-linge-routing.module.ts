import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutLingePage } from './ajout-linge.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutLingePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutLingePageRoutingModule {}
