import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

//#region Queries
const gqlEditUser = gql`
  mutation editUser(
    $fullname: String!
    $phone: String!
    $address: String!
    $token: String!
  ) {
    editUser(
      input: {
        fullname: $fullname
        phone: $phone
        address: $address
        token: $token
      }
    )
  }
`;
const gqlChangePassword = gql`
  mutation changePassword(
    $oldPassword: String!
    $newPassword: String!
    $confirmPassword: String!
    $token: String!
  ) {
    changePassword(
      input: {
        oldPassword: $oldPassword
        newPassword: $newPassword
        confirmPassword: $confirmPassword
        token: $token
      }
    )
  }
`;
//#endregion

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}
  updateBasicInfo(input: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gqlEditUser,
      variables: {
        fullname: input.fullname,
        phone: input.phone,
        address: input.address,
        token: localStorage.getItem('token'),
      },
    });
  }
  updateLoginInfo(input: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gqlChangePassword,
      variables: {
        oldPassword: input.oldPassword,
        newPassword: input.newPassword,
        confirmPassword: input.confirmPassword,
        token: localStorage.getItem('token'),
      },
    });
  }
}
