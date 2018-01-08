import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutes as routes } from './user-routing.module';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';
import { OrderListItemComponent } from './components/orders/order-list-item/order-list-item.component';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user.component';
import { UserPageComponent } from './components/user/user-page.component';
import { ProfilePageComponent } from './components/profile/profile-page.component';
import { AddressesPageComponent } from './components/addresses/addresses-page.component';
import { OverviewPageComponent } from './components/overview/overview-page.component';
import { OrdersPageComponent } from './components/orders/orders-page.component';

export const COMPONENTS = [
  UserComponent,
  UserPageComponent,
  ProfilePageComponent,
  AddressesPageComponent,
  OverviewPageComponent,
  OrdersPageComponent,
  OrderDetailComponent,
  OrderListItemComponent
];

@NgModule({
  declarations: [ COMPONENTS ],
  exports: [ ],
  providers: [
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class UserModule {}
