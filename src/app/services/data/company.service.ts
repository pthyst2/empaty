import { Injectable } from '@angular/core';
import { solidCompanyInfo } from 'src/app/data/solids/solidCompanyInfo';
const company = solidCompanyInfo;
@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor() {}
  info() {
    return company;
  }
}
