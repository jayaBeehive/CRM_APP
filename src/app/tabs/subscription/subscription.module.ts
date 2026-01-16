import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { SubscriptionComponent } from './subscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedmoduleModule } from 'src/app/sharedmodule/sharedmodule.module';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionpageComponent } from './subscriptionpage/subscriptionpage.component';

@NgModule({
  declarations: [SubscriptionComponent, SubscriptionpageComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionRoutingModule,
    ReactiveFormsModule,
    SharedmoduleModule
  ]
})
export class SubscriptionModule { }
