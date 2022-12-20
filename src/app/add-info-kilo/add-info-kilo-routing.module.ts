import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddInfoKiloPage } from './add-info-kilo.page';

const routes: Routes = [
  {
    path: '',
    component: AddInfoKiloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddInfoKiloPageRoutingModule {}
