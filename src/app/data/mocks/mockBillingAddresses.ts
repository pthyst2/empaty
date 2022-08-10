import { mockUsers } from './mockUsers';

const users = mockUsers;

export const mockBillingAddresses = [
  {
    _id: '1',
    user: users[0]._id,
    country: 'Kuwait',
    state: 'Some State',
    city: 'Kuwaiti',
    street: '15A Some Street',
    unit: '',
    postalCode: '700000',
    apartment: 'Halo Building 5F',
  },
];
