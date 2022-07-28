import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  mockUser,
  mockUserToken,
  mockUserDecoded,
} from 'src/app/data/mocks/mockUser';

const user = mockUser;
const token = mockUserToken;
const userDecoded = mockUserDecoded;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn() {
    let localUser: any = localStorage.getItem('user');
    let user = JSON.parse(localUser);
    return user ? true : false;
  }

  login(body: any) {
    if (body.email == user.email && body.password == user.password) {
      return {
        status: 200,
        message: 'Logged in successully.',
        data: token,
      };
    } else {
      throw new Error('Incorrect email or password.');
    }
  }

  getUserDecoded() {
    return userDecoded;
  }

  sendResetCode(body: any) {
    if (body.email) {
      return {
        status: 200,
        message: 'Reset code was sent to your email',
      };
    } else {
      throw new Error('Error when sending reset code');
    }
  }

  resetPassword(body: any) {
    if (body.resetCode == user.resetCode) {
      return {
        status: 200,
        message: 'Password reset successfully.',
      };
    } else {
      throw new Error('Invalid reset code');
    }
  }

  register(body: any) {
    if (body.email == user.email) {
      throw new Error('Email has been used by another account.');
    }
    if (body.companyName == user.companyName) {
      throw new Error('Company name has taken by another account.');
    }
    return {
      status: 201,
      message: 'New account created.',
      data: {
        _id: '0123456789abcdefghjklmnopq',
        fullname: body.firstName + ' ' + body.lastName,
        email: body.email,
      },
    };
  }

  clearStorage() {
    localStorage.clear();
  }
}
