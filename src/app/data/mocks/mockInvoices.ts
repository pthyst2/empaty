import { solidAppInfo } from '../solids/solidAppInfo';
import { solidCompanyInfo } from '../solids/solidCompanyInfo';
import { mockUsers } from './mockUsers';
import { mockBillingAddresses } from './mockBillingAddresses';
import { mockServiceAddresses } from './mockServiceAddresses';
const users = mockUsers;
const app = solidAppInfo;
const company = solidCompanyInfo;
const addressBill = mockBillingAddresses[0];
const addressService = mockServiceAddresses[0];

export const mockInvoices = [
  {
    _id: '1',
    name: 'INV-0000001',
    user: users[0],
    company: company,
    addresses: {
      bill: addressBill,
      service: addressService,
    },
    summary: {
      charges: [
        {
          name: 'スペース',
          detail: new Map<string, any>([
            ['title', '表参道本社'],
            ['size', '50m x 50m'],
            ['category', 'オフィス'],
          ]),
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'オブジェクトパッケージ',
          detail: new Map<string, any>([
            ['title', '表参道本社'],
            ['size', '50m x 50m'],
            ['category', 'オブジェクトパッケージ'],
          ]),
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
      ],
      usages: [
        {
          name: 'スペースUIプランナー',
          detail: {
            title: '3Dスペースの配置UI',
            items: [],
            note: '変更無限',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'スペース管理ージ',
          detail: {
            title: 'スペース管理ページ',
            items: [
              {
                name: '管理アカウント',
                quantity: 1,
              },
              {
                name: '清算アカウント（含め）',
                quantity: 1,
              },
            ],
            note: '',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'ECショップ管理ージ',
          detail: {
            title: '管理ページ（Magento）',
            items: [
              {
                name: 'アドミンアカウント',
                quantity: 1,
              },
              {
                name: '基本プロダクトパッケージ',
                quantity: 1,
              },
            ],
            note: 'デフォルトテーマ',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'スペースUIプランナー',
          detail: {
            title: '3Dスペースの配置UI',
            items: [],
            note: '変更無限',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'スペース管理ージ',
          detail: {
            title: 'スペース管理ページ',
            items: [
              {
                name: '管理アカウント',
                quantity: 1,
              },
              {
                name: '清算アカウント（含め）',
                quantity: 1,
              },
            ],
            note: '',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'ECショップ管理ージ',
          detail: {
            title: '管理ページ（Magento）',
            items: [
              {
                name: 'アドミンアカウント',
                quantity: 1,
              },
              {
                name: '基本プロダクトパッケージ',
                quantity: 1,
              },
            ],
            note: 'デフォルトテーマ',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'スペースUIプランナー',
          detail: {
            title: '3Dスペースの配置UI',
            items: [],
            note: '変更無限',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'スペース管理ージ',
          detail: {
            title: 'スペース管理ページ',
            items: [
              {
                name: '管理アカウント',
                quantity: 1,
              },
              {
                name: '清算アカウント（含め）',
                quantity: 1,
              },
            ],
            note: '',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'ECショップ管理ージ',
          detail: {
            title: '管理ページ（Magento）',
            items: [
              {
                name: 'アドミンアカウント',
                quantity: 1,
              },
              {
                name: '基本プロダクトパッケージ',
                quantity: 1,
              },
            ],
            note: 'デフォルトテーマ',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'スペースUIプランナー',
          detail: {
            title: '3Dスペースの配置UI',
            items: [],
            note: '変更無限',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'スペース管理ージ',
          detail: {
            title: 'スペース管理ページ',
            items: [
              {
                name: '管理アカウント',
                quantity: 1,
              },
              {
                name: '清算アカウント（含め）',
                quantity: 1,
              },
            ],
            note: '',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'ECショップ管理ージ',
          detail: {
            title: '管理ページ（Magento）',
            items: [
              {
                name: 'アドミンアカウント',
                quantity: 1,
              },
              {
                name: '基本プロダクトパッケージ',
                quantity: 1,
              },
            ],
            note: 'デフォルトテーマ',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
      ],
    },
    totals: {
      charge: {
        gross: 318000,
        tax: 31800,
        subTotal: 349800,
        total: 349800,
      },
      usage: { gross: 477000, tax: 47700, subTotal: 524700, total: 524700 },
      total: {
        gross: 795000,
        tax: 79500,
        subTotal: 874500,
        total: 874500,
      },
    },
    transaction: {
      currency: 'YEN',
      date: new Date(),
      number: 'ABCDEFGHJKL0123456',
      type: 'Credit Card',
      supportEmail: app.contact.support.email,
    },
    created_at: '2022-08-05 00:00:00',
  },
  {
    _id: '2',
    name: 'INV-0000002',
    user: users[0],
    company: company,
    addresses: {
      bill: addressBill,
      service: addressService,
    },
    summary: {
      charges: [
        {
          name: 'スペース',
          detail: new Map<string, any>([
            ['title', '表参道本社'],
            ['size', '50m x 50m'],
            ['category', 'オフィス'],
          ]),
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'オブジェクトパッケージ',
          detail: new Map<string, any>([
            ['title', '表参道本社'],
            ['size', '50m x 50m'],
            ['category', 'オブジェクトパッケージ'],
          ]),
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
      ],
      usages: [
        {
          name: 'スペースUIプランナー',
          detail: {
            title: '3Dスペースの配置UI',
            items: [],
            note: '変更無限',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'スペース管理ージ',
          detail: {
            title: 'スペース管理ページ',
            items: [
              {
                name: '管理アカウント',
                quantity: 1,
              },
              {
                name: '清算アカウント（含め）',
                quantity: 1,
              },
            ],
            note: '',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'ECショップ管理ージ',
          detail: {
            title: '管理ページ（Magento）',
            items: [
              {
                name: 'アドミンアカウント',
                quantity: 1,
              },
              {
                name: '基本プロダクトパッケージ',
                quantity: 1,
              },
            ],
            note: 'デフォルトテーマ',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
      ],
    },
    totals: {
      charge: {
        gross: 318000,
        tax: 31800,
        subTotal: 349800,
        total: 349800,
      },
      usage: { gross: 477000, tax: 47700, subTotal: 524700, total: 524700 },
      total: {
        gross: 795000,
        tax: 79500,
        subTotal: 874500,
        total: 874500,
      },
    },
    transaction: {
      currency: 'YEN',
      date: new Date(),
      number: 'ABCDEFGHJKL0123456',
      type: 'Credit Card',
      supportEmail: app.contact.support.email,
    },
    created_at: '2022-08-05 00:00:00',
  },
  {
    _id: '3',
    name: 'INV-0000003',
    user: users[0],
    company: company,
    addresses: {
      bill: addressBill,
      service: addressService,
    },
    totals: {
      charge: {
        gross: 318000,
        tax: 31800,
        subTotal: 349800,
        total: 349800,
      },
      usage: { gross: 477000, tax: 47700, subTotal: 524700, total: 524700 },
      total: {
        gross: 795000,
        tax: 79500,
        subTotal: 874500,
        total: 874500,
      },
    },
    transaction: {
      currency: 'YEN',
      date: new Date(),
      number: 'ABCDEFGHJKL0123456',
      type: 'Credit Card',
      supportEmail: app.contact.support.email,
    },
    created_at: '2022-08-05 00:00:00',
  },
  {
    _id: '4',
    name: 'INV-0000004',
    user: users[0],
    company: company,
    addresses: {
      bill: addressBill,
      service: addressService,
    },
    summary: {
      charges: [
        {
          name: 'スペース',
          detail: new Map<string, any>([
            ['title', '表参道本社'],
            ['size', '50m x 50m'],
            ['category', 'オフィス'],
          ]),
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'オブジェクトパッケージ',
          detail: new Map<string, any>([
            ['title', '表参道本社'],
            ['size', '50m x 50m'],
            ['category', 'オブジェクトパッケージ'],
          ]),
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
      ],
      usages: [
        {
          name: 'スペースUIプランナー',
          detail: {
            title: '3Dスペースの配置UI',
            items: [],
            note: '変更無限',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'スペース管理ージ',
          detail: {
            title: 'スペース管理ページ',
            items: [
              {
                name: '管理アカウント',
                quantity: 1,
              },
              {
                name: '清算アカウント（含め）',
                quantity: 1,
              },
            ],
            note: '',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'ECショップ管理ージ',
          detail: {
            title: '管理ページ（Magento）',
            items: [
              {
                name: 'アドミンアカウント',
                quantity: 1,
              },
              {
                name: '基本プロダクトパッケージ',
                quantity: 1,
              },
            ],
            note: 'デフォルトテーマ',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
      ],
    },
    totals: {
      charge: {
        gross: 318000,
        tax: 31800,
        subTotal: 349800,
        total: 349800,
      },
      usage: { gross: 477000, tax: 47700, subTotal: 524700, total: 524700 },
      total: {
        gross: 795000,
        tax: 79500,
        subTotal: 874500,
        total: 874500,
      },
    },
    transaction: {
      currency: 'YEN',
      date: new Date(),
      number: 'ABCDEFGHJKL0123456',
      type: 'Credit Card',
      supportEmail: app.contact.support.email,
    },
    created_at: '2022-08-05 00:00:00',
  },
  {
    _id: '5',
    name: 'INV-0000005',
    user: users[0],
    company: company,
    addresses: {
      bill: addressBill,
      service: addressService,
    },
    summary: {
      charges: [
        {
          name: 'スペース',
          detail: new Map<string, any>([
            ['title', '表参道本社'],
            ['size', '50m x 50m'],
            ['category', 'オフィス'],
          ]),
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'オブジェクトパッケージ',
          detail: new Map<string, any>([
            ['title', '表参道本社'],
            ['size', '50m x 50m'],
            ['category', 'オブジェクトパッケージ'],
          ]),
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
      ],
      usages: [
        {
          name: 'スペースUIプランナー',
          detail: {
            title: '3Dスペースの配置UI',
            items: [],
            note: '変更無限',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'スペース管理ージ',
          detail: {
            title: 'スペース管理ページ',
            items: [
              {
                name: '管理アカウント',
                quantity: 1,
              },
              {
                name: '清算アカウント（含め）',
                quantity: 1,
              },
            ],
            note: '',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
        {
          name: 'ECショップ管理ージ',
          detail: {
            title: '管理ページ（Magento）',
            items: [
              {
                name: 'アドミンアカウント',
                quantity: 1,
              },
              {
                name: '基本プロダクトパッケージ',
                quantity: 1,
              },
            ],
            note: 'デフォルトテーマ',
          },
          period: {
            start: new Date(),
            end: new Date(),
          },
          quantity: 1,
          price: 159000,
          tax: 15900,
          subTotal: 174900,
          total: 174900,
        },
      ],
    },
    totals: {
      charge: {
        gross: 318000,
        tax: 31800,
        subTotal: 349800,
        total: 349800,
      },
      usage: { gross: 477000, tax: 47700, subTotal: 524700, total: 524700 },
      total: {
        gross: 795000,
        tax: 79500,
        subTotal: 874500,
        total: 874500,
      },
    },
    transaction: {
      currency: 'YEN',
      date: new Date(),
      number: 'ABCDEFGHJKL0123456',
      type: 'Credit Card',
      supportEmail: app.contact.support.email,
    },
    created_at: '2022-08-05 00:00:00',
  },
];
