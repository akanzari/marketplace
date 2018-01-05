import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductHomeComponent } from './container/product-home.component';
import { ProductDetailContentComponent } from './container/product-detail-content.component';

const routes: Routes = [
    { path: 'product-list/:id', component: ProductHomeComponent },
    { path: 'product-details/:slug', component: ProductDetailContentComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatalogRoutingModule { }