import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductHomePageComponent } from './components/product-home-page/product-home-page.component';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';

const routes: Routes = [
    { path: 'product-list/:id', component: ProductHomePageComponent },
    { path: 'product-details/:slug', component: ProductDetailPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatalogRoutingModule { }