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
}
