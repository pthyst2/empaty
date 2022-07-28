import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArrayService {
  constructor() {}

  fill(start: number, end: number) {
    let result: any = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }
}
