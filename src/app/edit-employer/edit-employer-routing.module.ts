import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEmployerPage } from './edit-employer.page';

const routes: Routes = [
  {
    path: '',
    component: EditEmployerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEmployerPageRoutingModule {}
