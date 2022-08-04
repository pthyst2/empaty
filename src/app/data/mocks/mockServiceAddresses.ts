import { mockUsers } from './mockUsers';

const users = mockUsers;

export const mockServiceAddresses = [
  {
    _id: '1',
    user: users[0]._id,
    country: 'Kuwait',
    state: 'Some Other State',
    city: 'Kuwaiti',
    street: 'Some Other Street',
    unit: '',
    postalCode: '700000',
  },
];
