import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  constructor() { }

  getExpireYears() {
    let today = new Date();
    let thisYear = (today.getFullYear() % 2000);

    let yearEnd = thisYear + 25;
    let result: any = [];
    for (let i = thisYear; i <= yearEnd; i++) {
      result.push(i);
    }
    return result;
  }
  getLast4(cardNumber: string) {
    let result: any = cardNumber.trim();
    let n = result.length;
    result = result.substring(n - 4, n);
    return result;
  }
}
