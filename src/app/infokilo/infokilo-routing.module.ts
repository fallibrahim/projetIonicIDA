import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfokiloPage } from './infokilo.page';

const routes: Routes = [
  {
    path: '',
    component: InfokiloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfokiloPageRoutingModule {}
