import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  route = environment.apiUrl + 'products';
  constructor(private http: HttpClient) {}
  getAllProducts(page?: number): Observable<any> {
    return this.http.get(
      this.route + '/all/page/' + (page ? page.toString() : '1')
    );
  }
}
