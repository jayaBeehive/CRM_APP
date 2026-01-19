import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventorySuggestionPageRoutingModule } from './inventory-suggestion-routing.module';

import { InventorySuggestionPage } from './inventory-suggestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventorySuggestionPageRoutingModule
  ],
  declarations: [InventorySuggestionPage]
})
export class InventorySuggestionPageModule {}
