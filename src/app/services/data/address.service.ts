import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { mockBillingAddresses } from 'src/app/data/mocks/mockBillingAddresses';
import { mockServiceAddresses } from 'src/app/data/mocks/mockServiceAddresses';

const bas = mockBillingAddresses;
const sas = mockServiceAddresses;

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient) {}
  getBillAddress(_id: string) {
    let res: any = [
      {
        items: [],
      },
    ];
    for (let address of bas) {
      if (address.user == _id) {
        res[0].items.push(address);
        break;
      }
    }
    return res;
  }
  getServiceAddress(_id: string) {
    let res: any = [
      {
        items: [],
      },
    ];
    for (let address of sas) {
      if (address.user == _id) {
        res[0].items.push(address);
        break;
      }
    }
    return res;
  }
}
