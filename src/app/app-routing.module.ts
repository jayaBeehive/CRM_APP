import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./common/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./common/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./tabs/subscription/subscription.module').then( m => m.SubscriptionModule)
  }, // must remove**
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then( m => m.InventoryModule)
  }, // must remove**
  {
    path: 'test2',
    loadChildren: () => import('./inventory-detail/test2.module').then( m => m.Test2PageModule)
  },   // must remove**
  {
    path: 'sales-list',
    loadChildren: () => import('./sales/sales-list/sales-list.module').then( m => m.SalesListPageModule)
  },// must remove**
  {
    path: 'sales-detail',
    loadChildren: () => import('./sales/sales-detail/sales-detail.module').then( m => m.SalesDetailPageModule)
  },// must remove**
  {
    path: 'ledger',
    loadChildren: () => import('./sales/ledger/ledger.module').then( m => m.LedgerPageModule)
  },// must remove**
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
