import { mockSpaces } from './mockSpaces';
import { mockSpaceItems } from './mockSpaceItems';
const items = mockSpaceItems;
const spaces = mockSpaces;

export const mockSpaceOrder = {
  _id: '1',
  space: {
    title: spaces[0].title,
  },
  items: [
    {
      item: items[0],
      quantity: 1,
    },
    {
      item: items[1],
      quantity: 1,
    },
    {
      item: items[2],
      quantity: 1,
    },
    {
      item: items[3],
      quantity: 1,
    },
    {
      item: items[4],
      quantity: 1,
    },
    {
      item: items[5],
      quantity: 1,
    },
  ],
  payments: {
    initial: {
      subTotal: 160000.0,
      tax: 16000.0,
      total: 176000.0,
    },
    monthly: {
      subTotal: 5000.0,
      tax: 500.0,
      total: 5500.0,
    },
  },
  createdAt: '2022-07-26 09:00:00',
  updatedAt: '2022-07-26 10:00:00',
};
