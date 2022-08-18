import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { mockUserDecoded } from 'src/app/data/mocks/mockUser';

const userDecoded = mockUserDecoded;

//#region Queries
const gqlUserInfo = gql`
  query userInfo($token: String!) {
    userInfo(token: $token) {
      phone
      fullname
      email
      address
      id
      company {
        name
      }
    }
  }
`;
const gqlLogin = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password })
  }
`;

const gqlForgotPassword = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;
const gqlResetPassword = gql`
  mutation resetPassword(
    $email: String!
    $codeActive: String!
    $password: String!
  ) {
    resetPassword(
      input: { email: $email, codeActive: $codeActive, password: $password }
    )
  }
`;
//#endregion

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apollo: Apollo) {}

  isLoggedIn() {
    let token: any = localStorage.getItem('token');
    return token ? true : false;
  }

  login(input: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gqlLogin,
      variables: {
        email: input.email,
        password: input.password,
      },
    });
  }
  setUserToken(data: string) {
    localStorage.setItem('token', data);
  }
  getUserDecoded() {
    return userDecoded;
  }
  getUserInfo() {
    return this.apollo.query({
      query: gqlUserInfo,
      variables: {
        token: localStorage.getItem('token'),
      },
    });
  }
  sendResetCode(input: any) {
    return this.apollo.mutate({
      mutation: gqlForgotPassword,
      variables: {
        email: input,
      },
    });
  }

  resetPassword(input: any) {
    return this.apollo.mutate({
      mutation: gqlResetPassword,
      variables: {
        email: input.email,
        codeActive: input.codeActive,
        password: input.password,
      },
    });
  }
}
