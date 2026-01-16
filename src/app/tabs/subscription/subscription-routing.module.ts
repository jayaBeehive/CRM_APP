import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { SubscriptionComponent } from './subscription.component';
import { SubscriptionpageComponent } from './subscriptionpage/subscriptionpage.component';

const routes: Routes = [
    {
      path: '',
      component: SubscriptionpageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
