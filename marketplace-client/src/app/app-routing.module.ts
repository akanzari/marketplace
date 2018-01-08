import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateViaAuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'catalog', loadChildren: './catalog/catalog.module#CatalogModule' },
  { path: 'auth', loadChildren: './auth/auth.module#RootAuthModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule', canActivate: [CanActivateViaAuthGuard] },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
