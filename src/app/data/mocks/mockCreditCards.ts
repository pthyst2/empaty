import { mockUsers } from './mockUsers';
import { mockCreditCardTypes } from './mockCreditCardTypes';
const users = mockUsers;
const types = mockCreditCardTypes;

export const mockCreditCards = [
  {
    _id: '1',
    user: users[0]._id,
    type: types[1].value,
    holder: 'HUYNH THUY LINH',
    cardNumber: '4221040812345678',
    last4: '5678',
    expire: {
      month: 9,
      year: 2026,
    },
    cvc: 578,
  },
];
