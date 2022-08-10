import { Injectable } from '@angular/core';
import { mockUsers } from 'src/app/data/mocks/mockUsers';
import { mockInvoices } from 'src/app/data/mocks/mockInvoices';
const users = mockUsers;
const invoices = mockInvoices;
@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor() {}
  getAll(_id: string) {
    let res: any = [
      {
        items: [],
      },
    ];
    for (let invoice of invoices) {
      res[0].items.push(invoice);
    }
    return res;
  }

  getDetail(id: string) {
    let res: any = {
      status: 200,
      data: null,
    };

    for (let invoice of invoices) {
      if (invoice._id == id) {
        res.data = invoice;
        break;
      }
    }
    return res;
  }
}
