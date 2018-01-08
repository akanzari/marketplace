
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../services/catalog.service';
import { Product } from '../../core/models/product';

@Component({
    selector: 'app-product-detail-content',
    template: `
    <div *ngIf="product$ != null">
      <app-product-details [product]='product$'></app-product-details>
    </div>
  `
})
export class ProductDetailContentComponent {

    product$: Product = null;
    productSlug: string;

    constructor(private catalogService: CatalogService, private route: ActivatedRoute) {
        this.route.params.subscribe(
            (params: any) => {
                this.productSlug = params['slug'];
                this.catalogService.fetchProduct(this.productSlug).subscribe(response => this.product$ = response);
            }
        );
    }

}