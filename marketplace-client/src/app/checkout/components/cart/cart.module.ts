import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LineItemListComponent } from './line-item-list/line-item-list.component';
import { LineItemComponent } from './line-item-list/line-item/line-item.component';
import { OrderTotalSummaryComponent } from './order-total-summary/order-total-summary.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';


@NgModule({
  declarations: [
    CartComponent,
    LineItemListComponent,
    LineItemComponent,
    OrderTotalSummaryComponent,
    EmptyCartComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: []
})
export class CartModule { }
