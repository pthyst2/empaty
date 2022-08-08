import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}
  getAllCountries(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
  getCountry(name: string): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/name/' + name);
  }
  sortAZ(data: any) {
    let sorted: any = [];
    sorted = data.sort((a: any, b: any) => {
      if (a.name.common > b.name.common) {
        return 1;
      } else if (a.name.common < b.name.common) {
        return -1;
      } else {
        return 0;
      }
    });
    return sorted;
  }
}
