import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LingePage } from './linge.page';

const routes: Routes = [
  {
    path: '',
    component: LingePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LingePageRoutingModule {}
