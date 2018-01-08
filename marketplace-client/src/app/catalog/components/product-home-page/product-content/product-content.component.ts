import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as fromRoot from './../../../../app.reducer';
import { Observable } from 'rxjs/Observable';
import { getProducts } from '../../../store/reducers/selectors';
import { Store } from '@ngrx/store';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'app-content',
  template: `
     <app-content-header (toggleSize)="toggleSize($event)"></app-content-header>
     <app-product-list [(toggleLayout)]='toggleLayout' [products]='products'></app-product-list>
  `
})
export class ProductContentComponent {

  @Input() products: Product[];
  toggleLayout = { size: 'COZY' };

  constructor() { }

  toggleSize(layoutInfo) {
    this.toggleLayout = layoutInfo;
  }

}