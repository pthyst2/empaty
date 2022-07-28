import { Injectable } from '@angular/core';
import { mockUserPlans } from 'src/app/data/mocks/mockUserPlans';
const plans = mockUserPlans;
@Injectable({
  providedIn: 'root',
})
export class UserPlanService {
  constructor() {}
  getPlans() {
    return {
      status: 200,
      data: plans,
    };
  }
  purchasePlan(body: any) {
    return {
      status: 201,
      messages: 'Purchase plan successfully.',
    };
  }
}
