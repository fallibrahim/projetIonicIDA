import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailEmployerPage } from './detail-employer.page';

const routes: Routes = [
  {
    path: '',
    component: DetailEmployerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailEmployerPageRoutingModule {}
