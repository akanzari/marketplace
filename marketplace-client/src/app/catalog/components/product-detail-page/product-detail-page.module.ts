
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ProductDetailPageComponent } from './product-detail-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductPriceInfoComponent } from './product-details/product-price-info/product-price-info.component';
import { ProductImagesComponent } from './product-details/product-images/product-images.component';
import { ProductDescriptionComponent } from './product-details/product-description/product-description.component';
import { SharedModule } from '../../../shared/shared.module';

export const COMPONENTS = [
    ProductDetailPageComponent,
    ProductDetailsComponent,
    ProductPriceInfoComponent,
    ProductImagesComponent,
    ProductDescriptionComponent
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: COMPONENTS
})
export class ProductDetailPageModule {
    static forRoot() {
        return {
            ngModule: ProductDetailPageModule
        };
    }
}
