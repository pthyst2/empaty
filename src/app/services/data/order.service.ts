import { Injectable } from '@angular/core';
import { mockSpaceOrder } from 'src/app/data/mocks/mockSpaceOrder';
const spaceOrder = mockSpaceOrder;

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}
  getSpaceOrder() {
    return {
      status: 200,
      data: spaceOrder,
    };
  }
  completeSpaceOrder() {
    return {
      status: 201,
    };
  }
}
