import { mockCollaboratorRoles } from './mockCollaboratorRoles';
import { mockCollaboratorStatuses } from './mockCollaboratorStatuses';
import { mockUsers } from './mockUsers';
const users = mockUsers;
const roles = mockCollaboratorRoles;
const statuses = mockCollaboratorStatuses;
export const mockCollaborators = [
  {
    _id: '1',
    user: users[0]._id,
    collaborators: [
      {
        user: {
          _id: users[1]._id,
          fullname: users[1].fullname,
          email: users[1].email,
          name: users[1].name,
        },
        role: roles[0],
        status: statuses[0],
        created_at: new Date(),
      },
      {
        user: {
          _id: users[0]._id,
          fullname: users[0].fullname,
          email: users[0].email,
          name: users[0].name,
        },
        role: roles[1],
        status: statuses[1],
        created_at: new Date(),
      },
      {
        user: {
          _id: users[2]._id,
          fullname: users[2].fullname,
          email: users[2].email,
          name: users[2].name,
        },
        role: roles[1],
        status: statuses[1],
        created_at: new Date(),
      },
      {
        user: {
          _id: users[3]._id,
          fullname: users[3].fullname,
          email: users[3].email,
          name: users[3].name,
        },
        role: roles[1],
        status: statuses[1],
        created_at: new Date(),
      },
    ],
  },
  {
    _id: '2',
    user: users[1],
    collaborators: [
      {
        user: {
          _id: users[0]._id,
          fullname: users[0].fullname,
          email: users[0].email,
          name: users[0].name,
        },
        role: roles[1],
        status: statuses[1],
        created_at: new Date(),
      },
    ],
  },
];
