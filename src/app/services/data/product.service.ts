import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mockProducts } from 'src/app/data/mocks/mockProducts';
import { mockProductCategories } from 'src/app/data/mocks/mockProductCategories';

const products = mockProducts;
const categories = mockProductCategories;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts(body: any) {
    return {
      status: 200,
      data: products,
      count: products.length,
    };
  }
  getCategories() {
    return {
      status: 200,
      data: categories,
      count: products.length,
    };
  }
}
