import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  updateBasicInfo(body?: any) {
    return {
      status: 200,
      message: 'Update basic info successull.',
    };
  }
  updateLoginInfo(body?: any) {
    return {
      status: 200,
      message: 'Update login info successull.',
    };
  }
}
