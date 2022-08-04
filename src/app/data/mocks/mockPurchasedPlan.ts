import { mockUsers } from './mockUsers';
import { mockUserPlans } from './mockUserPlans';
const users = mockUsers;
const plans = mockUserPlans;

export const mockPurchasedPlans = [
  {
    _id: '1',
    user: users[0]._id,
    plan: plans[0],
  },
];
