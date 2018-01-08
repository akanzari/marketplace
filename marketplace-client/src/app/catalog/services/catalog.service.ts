
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Product } from '../../core/models/product';
import { Category } from '../../core/models/category';

@Injectable()
export class CatalogService {

  constructor(private http: HttpClient) { }

  fetchProductsByCategorySlug(slug): Observable<Product[]> {
    return this.http
      .get<Product[]>('/products/category/' + slug)
      .map(body => { return body });
  }

  fetchCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>('/categories')
      .map(body => { return body });
  }

  fetchProduct(slug): Observable<Product> {
    return this.http
      .get<Product>('/products/' + slug)
      .map(body => { return body });
  }

}