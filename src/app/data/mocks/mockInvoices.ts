import { mockUsers } from './mockUsers';
const users = mockUsers;
export const mockInvoices = [
  {
    _id: '1',
    name: 'INV-0000001',
    user: users[0]._id,
    created_at: '2022-08-05 00:00:00',
  },
  {
    _id: '2',
    name: 'INV-0000002',
    user: users[0]._id,
    created_at: '2022-08-05 00:00:00',
  },
  {
    _id: '3',
    name: 'INV-0000003',
    user: users[0]._id,
    created_at: '2022-08-05 00:00:00',
  },
  {
    _id: '4',
    name: 'INV-0000004',
    user: users[0]._id,
    created_at: '2022-08-05 00:00:00',
  },
  {
    _id: '5',
    name: 'INV-0000005',
    user: users[0]._id,
    created_at: '2022-08-05 00:00:00',
  },
];
