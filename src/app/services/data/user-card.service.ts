import { Injectable } from '@angular/core';
import { mockCreditCards } from 'src/app/data/mocks/mockCreditCards';
import { mockCreditCardTypes } from 'src/app/data/mocks/mockCreditCardTypes';
const cards = mockCreditCards;
const types = mockCreditCardTypes;
@Injectable({
  providedIn: 'root',
})
export class UserCardService {
  constructor() {}
  updateCard(body: any) {
    return {
      status: 200,
      message: 'Update credit card information successfully.',
    };
  }
  getCard(_id: string) {
    return {
      status: 200,
      data: cards[0],
    };
  }
  getTypes() {
    return [
      {
        items: types,
      },
    ];
  }
}
