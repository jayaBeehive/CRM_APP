import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InventoryRoutingModule } from './inventory-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedmoduleModule } from 'src/app/sharedmodule/sharedmodule.module';
import { InventoryEntryComponent } from './inventory-entry/inventory-entry.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';


@NgModule({
  declarations: [InventoryEntryComponent, InventoryListComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedmoduleModule
  ]
})
export class InventoryModule { }
