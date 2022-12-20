import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationPersonnalisePage } from './validation-personnalise.page';

const routes: Routes = [
  {
    path: '',
    component: ValidationPersonnalisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationPersonnalisePageRoutingModule {}
