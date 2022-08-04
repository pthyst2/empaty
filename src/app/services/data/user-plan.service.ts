import { Injectable } from '@angular/core';
import { mockUserPlans } from 'src/app/data/mocks/mockUserPlans';
import { mockPurchasedPlans } from 'src/app/data/mocks/mockPurchasedPlan';
const plans = mockUserPlans;
const planneds = mockPurchasedPlans;
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
  getSubscription(_id: string) {
    let res: any = [
      {
        items: [],
      },
    ];
    for (let plan of planneds) {
      if (plan.user == _id) {
        res[0].items.push(plan);
      }
    }
    return res;
  }
}
