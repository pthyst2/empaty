import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { mockProductCategories } from 'src/app/data/mocks/mockProductCategories';
import { Observable } from 'rxjs';

const categories = mockProductCategories;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  route = 'products';
  constructor(private http: HttpClient) {}
  getAllProducts(page?: number): Observable<any> {
    return this.http.get(
      this.route + '/all/page/' + (page ? page.toString() : '1')
    );
  }

  getCategories() {
    return {
      status: 200,
      data: categories,
    };
  }
}
