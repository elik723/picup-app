import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'current-order', loadChildren: './current-order/current-order.module#CurrentOrderPageModule' },
  { path: 'past-orders', loadChildren: './past-orders/past-orders.module#PastOrdersPageModule' },
  { path: 'product', loadChildren: './product/product.module#ProductPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
