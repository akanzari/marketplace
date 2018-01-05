import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product';
import { Image } from '../../models/image';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;
  description: string;
  images: Image[];

  constructor() {
  }

  ngOnInit() {
    this.description = this.product.description;
    this.images = this.product.media;
  }

}