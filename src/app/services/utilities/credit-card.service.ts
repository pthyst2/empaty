import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  constructor() {}

  getExpireYears() {
    let today = new Date();
    let thisYear = today.getFullYear();
    let yearEnd = thisYear + 25;
    let result: any = [];
    for (let i = thisYear; i <= yearEnd; i++) {
      result.push(i);
    }
    return result;
  }
}
