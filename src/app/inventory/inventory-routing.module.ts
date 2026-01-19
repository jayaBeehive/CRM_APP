import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryEntryComponent } from './inventory-entry/inventory-entry.component';

const routes: Routes = [
    {
      path: '',
      component: InventoryEntryComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
