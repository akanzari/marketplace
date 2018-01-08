import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CatalogService } from './services/catalog.service';
import { CatalogRoutingModule } from './catalog-routing.module';
import { catalogReducers } from './store/interface';
import { EffectsModule } from '@ngrx/effects';
import { CatalogEffects } from './store/effects/catalog.effects';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ProductDetailPageModule } from './components/product-detail-page/product-detail-page.module';
import { ProductHomePageModule } from './components/product-home-page/product-home-page.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CatalogRoutingModule,
    ProductDetailPageModule.forRoot(),
    ProductHomePageModule.forRoot(),
    StoreModule.forFeature('catalog', catalogReducers),
    EffectsModule.forFeature([CatalogEffects]),
  ],
  declarations: [BreadcrumbComponent]
})
export class CatalogModule {
  static forRoot() {
    return {
      ngModule: CatalogModule,
      providers: [CatalogService]
    };
  }
}
