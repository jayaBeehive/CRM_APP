import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test2Page } from './test2.page';

const routes: Routes = [
  {
    path: '',
    component: Test2Page
  },
  {
    path: 'inventory-suggestion',
    loadChildren: () => import('./inventory-suggestion/inventory-suggestion.module').then( m => m.InventorySuggestionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test2PageRoutingModule {}
