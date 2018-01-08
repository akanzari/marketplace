import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ProductContentComponent } from './product-content/product-content.component';
import { ProductListComponent } from './product-content/product-list/product-list.component';
import { ProductHomePageComponent } from './product-home-page.component';
import { ContentHeaderComponent } from './product-content/content-header/content-header.component';
import { SharedModule } from '../../../shared/shared.module';

export const COMPONENTS = [
  ProductContentComponent,
  ProductListComponent,
  ProductContentComponent,
  ProductHomePageComponent,
  ContentHeaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: COMPONENTS
})
export class ProductHomePageModule {
  static forRoot() {
    return {
      ngModule: ProductHomePageModule
    };
  }
}
