import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomHomePage } from './custom-home.page';

const routes: Routes = [
  {
    path: '',
    component: CustomHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomHomePageRoutingModule {}
