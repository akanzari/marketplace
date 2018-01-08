import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input() products: Product[];
  @Input() toggleLayout;
  startPage: Number;
  paginationLimit: Number;

  constructor() { }

  getMargin() {
    return this.toggleLayout.size === 'COZY' ? '0 15px 20px 0' : '0 80px 20px 0';
  }

  showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 3;
  }

}