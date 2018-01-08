import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartModule } from './components/cart/cart.module';
import { CheckoutRoutes as routes } from './checkout-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CartModule
    ]
})
export class CheckoutModule {
    static forRoot() {
        return {
            ngModule: CheckoutModule,
            providers: [],
        };
    }
}