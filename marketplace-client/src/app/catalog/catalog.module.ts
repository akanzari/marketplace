import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CatalogService } from './services/catalog.service';
import { CatalogRoutingModule } from './catalog-routing.module';
import { catalogReducers } from './store/interface';
import { EffectsModule } from '@ngrx/effects';
import { CatalogEffects } from './store/effects/catalog.effects';
import { ProductContentComponent } from './container/product-content.component';
import { ProductHomeComponent } from './container/product-home.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ContentHeaderComponent } from './components/product-content/content-header/content-header.component';
import { ProductListComponent } from './components/product-content/product-list/product-list.component';
import { ProductDetailContentComponent } from './container/product-detail-content.component';
import { ProductDetailsComponent } from './components/product-detail/product-details.component';
import { ProductPriceInfoComponent } from './components/product-detail/product-price-info/product-price-info.component';
import { ProductImagesComponent } from './components/product-detail/product-images/product-images.component';
import { ProductDescriptionComponent } from './components/product-detail/product-description/product-description.component';

export const COMPONENTS = [
  ProductContentComponent,
  ProductListComponent,
  ProductContentComponent,
  ProductHomeComponent,
  BreadcrumbComponent,
  ContentHeaderComponent,
  ProductDetailContentComponent,
  ProductDetailsComponent,
  ProductPriceInfoComponent,
  ProductImagesComponent,
  ProductDescriptionComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CatalogRoutingModule,
    StoreModule.forFeature('catalog', catalogReducers),
    EffectsModule.forFeature([CatalogEffects]),
  ],
  declarations: COMPONENTS
})
export class CatalogModule {
  static forRoot() {
    return {
      ngModule: CatalogModule,
      providers: [CatalogService],
    };
  }
}
