import { environment } from 'src/environments/environment';
const imageUrl = environment.imageUrls.spaceItem;
export const mockSpaceItems = [
  {
    _id: '1',
    name: 'Employee Chair - EC01',
    price: 6000.0,
    tax: 600.0,
    monthly: 1000.0,
    sizes: {
      w: 460, // 0.46m
      d: 500, // 0.5m
      h: 770, // 0.77m
    },
    image: imageUrl + 'ec01.png',
  },
  {
    _id: '2',
    name: 'Employee Chair - EC02',
    price: 6000.0,
    tax: 600.0,
    monthly: 1000.0,
    sizes: {
      w: 460, // 0.46m
      d: 500, // 0.5m
      h: 770, // 0.77m
    },
    image: imageUrl + 'ec02.png',
  },
  {
    _id: '3',
    name: 'Employee Table - ET01',
    price: 8000.0,
    tax: 800.0,
    monthly: 1000.0,
    sizes: {
      w: 660,
      d: 1300,
      h: 900,
    },
    image: imageUrl + 'et01.png',
  },
  {
    _id: '4',
    name: 'Employee Table - ET02',
    price: 8000.0,
    tax: 800.0,
    monthly: 1000.0,
    sizes: {
      w: 660,
      d: 1300,
      h: 900,
    },
    image: imageUrl + 'et02.png',
  },
  {
    _id: '5',
    name: 'Bookshelf - BS01',
    price: 10000.0,
    tax: 1000.0,
    monthly: 1000.0,
    sizes: {
      w: 500,
      d: 1000,
      h: 1700,
    },
    image: imageUrl + 'bs01.png',
  },
  {
    _id: '6',
    name: 'Bookshelf - BS02',
    price: 10000.0,
    tax: 1000.0,
    monthly: 1000.0,
    sizes: {
      w: 500,
      d: 1000,
      h: 1700,
    },
    image: imageUrl + 'bs02.png',
  },
];
