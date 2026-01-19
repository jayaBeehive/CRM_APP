import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventorySuggestionPage } from './inventory-suggestion.page';

const routes: Routes = [
  {
    path: '',
    component: InventorySuggestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventorySuggestionPageRoutingModule {}
