import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailInfoKiloPage } from './detail-info-kilo.page';

const routes: Routes = [
  {
    path: '',
    component: DetailInfoKiloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailInfoKiloPageRoutingModule {}
