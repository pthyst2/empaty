import { mockUsers } from './mockUsers';
import { mockCreditCardTypes } from './mockCreditCardTypes';
const users = mockUsers;
const types = mockCreditCardTypes;

export const mockCreditCards = [
  {
    _id: '1',
    user: users[0]._id,
    type: types[1].value,
    holder: 'OPTIMIZER DEV',
    cardNumber: '4242424242424242',
    last4: '5678',
    expire: {
      month: 12,
      year: 34,
    },
    cvv: 567,
  },
];
