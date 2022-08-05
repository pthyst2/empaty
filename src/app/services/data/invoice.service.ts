import { Injectable } from '@angular/core';
import { mockUsers } from 'src/app/data/mocks/mockUsers';
const users = mockUsers;
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

    let n = 100;
    for (let i = 1; i <= n; i++) {
      res[0].items.push({
        _id: i.toString(),
        name: 'INV-' + i.toString(),
        user: users[0]._id,
        created_at: new Date(),
      });
    }

    return res;
  }
}
