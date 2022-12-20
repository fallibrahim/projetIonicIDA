import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormReactifPage } from './form-reactif.page';

const routes: Routes = [
  {
    path: '',
    component: FormReactifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormReactifPageRoutingModule {}
