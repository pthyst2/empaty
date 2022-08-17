import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

//#region Queries
const gqlEditUser = gql`
  mutation editUser($input: InputUserInfo!) {
    editUser(input: $input)
  }
`;
const gqlChangePassword = gql`
  mutation changePassword($input: ChangePassword!) {
    changePassword(input: $input)
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
        input: input,
      },
    });
  }
  updateLoginInfo(input: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gqlChangePassword,
      variables: {
        input: input,
      },
    });
  }
}
