import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditLingePage } from './edit-linge.page';

const routes: Routes = [
  {
    path: '',
    component: EditLingePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLingePageRoutingModule {}
