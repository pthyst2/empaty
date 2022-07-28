import { mockUser } from './mockUser';
import { mockUsers } from './mockUsers';
import { mockSpaceTypes } from './mockSpaceTypes';
import { mockSpaceCategories } from './mockSpaceCategories';
import { mockSpaceStatuses } from './mockSpaceStatuses';
import { mockSpaceRoles } from './mockSpaceRoles';
import { mockServiceTypes } from './mockServiceTypes';
import { environment } from 'src/environments/environment';

const user = mockUser;
const users = mockUsers;
const types = mockSpaceTypes;
const categories = mockSpaceCategories;
const statuses = mockSpaceStatuses;
const thumbnailUrl = environment.imageUrls.space;
const serviceTypes = mockServiceTypes;
const roles = mockSpaceRoles;

export const mockSpaces = [
  {
    _id: '1',
    title: 'Scene 1',
    type: types[0].value,
    thumbnail: thumbnailUrl + '1.png',
    audioFile: undefined,
    present: user.fullname,
    author: user.fullname,
    contact: {
      name: user.fullname,
      email: user.email,
      phoneNumber: '(+' + user.countryCode + ') ' + user.phoneNumber,
      address: user.address,
    },
    externalUrl: 'https://www.bspace2.com/scene1',
    publishedAt: '2022-07-17 00:00:00',
    createdAt: '2022-07-17 00:00:00',
    updatedAt: '2022-07-17 00:00:00',
    summary: '',
    category: categories[0]._id,
    status: statuses[0].value,
    serviceType: serviceTypes[0].value,
    size: {
      width: 5,
      length: 10,
    },
    paid: false,
    users: [
      {
        user: users[0],
        role: roles[0],
      },
      {
        user: users[1],
        role: roles[1],
      },
    ],
  },
  {
    _id: '2',
    title: 'Scene 2',
    type: types[1].value,
    thumbnail: thumbnailUrl + '2.png',
    audioFile: undefined,
    present: user.fullname,
    author: user.fullname,
    contact: {
      name: user.fullname,
      email: user.email,
      phoneNumber: '(+' + user.countryCode + ') ' + user.phoneNumber,
      address: user.address,
    },
    externalUrl: 'https://www.bspace2.com/scene2',
    publishedAt: '2022-07-17 00:00:00',
    createdAt: '2022-07-17 00:00:00',
    updatedAt: '2022-07-17 00:00:00',
    summary: '',
    category: categories[1]._id,
    status: statuses[1].value,
    serviceType: serviceTypes[1].value,
    size: {
      width: 10,
      length: 12,
    },
    paid: false,
    users: [
      {
        user: users[0],
        role: roles[0],
      },
      {
        user: users[1],
        role: roles[1],
      },
    ],
  },
  {
    _id: '3',
    title: 'Scene 3',
    type: types[2].value,
    thumbnail: thumbnailUrl + '3.png',
    audioFile: undefined,
    present: user.fullname,
    author: user.fullname,
    contact: {
      name: user.fullname,
      email: user.email,
      phoneNumber: '(+' + user.countryCode + ') ' + user.phoneNumber,
      address: user.address,
    },
    externalUrl: 'https://www.bspace2.com/scene2',
    publishedAt: '2022-07-17 00:00:00',
    createdAt: '2022-07-17 00:00:00',
    updatedAt: '2022-07-17 00:00:00',
    summary: '',
    category: categories[1]._id,
    status: statuses[1].value,
    serviceType: serviceTypes[2].value,
    size: {
      width: 6,
      length: 10,
    },
    paid: false,
    users: [
      {
        user: users[0],
        role: roles[0],
      },
      {
        user: users[1],
        role: roles[1],
      },
    ],
  },
  {
    _id: '4',
    title: 'Scene 4',
    type: types[0].value,
    thumbnail: thumbnailUrl + '4.png',
    audioFile: undefined,
    present: user.fullname,
    author: user.fullname,
    contact: {
      name: user.fullname,
      email: user.email,
      phoneNumber: '(+' + user.countryCode + ') ' + user.phoneNumber,
      address: user.address,
    },
    externalUrl: 'https://www.bspace2.com/scene1',
    publishedAt: '2022-07-17 00:00:00',
    createdAt: '2022-07-17 00:00:00',
    updatedAt: '2022-07-17 00:00:00',
    summary: '',
    category: categories[0]._id,
    status: statuses[0].value,
    serviceType: serviceTypes[0].value,
    size: {
      width: 8,
      length: 12,
    },
    paid: false,
    users: [
      {
        user: users[0],
        role: roles[0],
      },
      {
        user: users[1],
        role: roles[1],
      },
    ],
  },
  {
    _id: '5',
    title: 'Scene 5',
    type: types[1].value,
    thumbnail: thumbnailUrl + '5.png',
    audioFile: undefined,
    present: user.fullname,
    author: user.fullname,
    contact: {
      name: user.fullname,
      email: user.email,
      phoneNumber: '(+' + user.countryCode + ') ' + user.phoneNumber,
      address: user.address,
    },
    externalUrl: 'https://www.bspace2.com/scene2',
    publishedAt: '2022-07-17 00:00:00',
    createdAt: '2022-07-17 00:00:00',
    updatedAt: '2022-07-17 00:00:00',
    summary: '',
    category: categories[1]._id,
    status: statuses[1].value,
    serviceType: serviceTypes[1].value,
    size: {
      width: 6,
      length: 18,
    },
    paid: false,
    users: [
      {
        user: users[0],
        role: roles[0],
      },
      {
        user: users[1],
        role: roles[1],
      },
    ],
  },
  {
    _id: '6',
    title: 'Scene 6',
    type: types[2].value,
    thumbnail: undefined,
    audioFile: undefined,
    present: user.fullname,
    author: user.fullname,
    contact: {
      name: user.fullname,
      email: user.email,
      phoneNumber: '(+' + user.countryCode + ') ' + user.phoneNumber,
      address: user.address,
    },
    externalUrl: 'https://www.bspace2.com/scene2',
    publishedAt: '2022-07-17 00:00:00',
    createdAt: '2022-07-17 00:00:00',
    updatedAt: '2022-07-17 00:00:00',
    summary: '',
    category: categories[1]._id,
    status: statuses[1].value,
    serviceType: serviceTypes[2].value,
    size: {
      width: 7,
      length: 14,
    },
    paid: false,
    users: [
      {
        user: users[0],
        role: roles[0],
      },
      {
        user: users[1],
        role: roles[1],
      },
    ],
  },
];
