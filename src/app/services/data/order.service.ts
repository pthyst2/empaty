import { Injectable } from '@angular/core';
import { gql, Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
//#region Queries
const gqlMakeOrder = gql`query paymentFloor($payment: String!, $id: String!, $token: String!){
  paymentFloor(currency: "jpy", payment: $payment, id: $id, token: $token)
}`;
const gqlOrderSuccess = gql`query paymentSuccess($sessionID: String!, $tokenPayment: String!){paymentSuccess(sessionID: $sessionID,tokenPayment: $tokenPayment){
  id
  name
  status
  }
}`;
const gqlGetPrice = gql`query priceFloor($id: String!, $payment:String!, $token:String!) {
  pricefloor(id: $id,payment: $payment,token: $token){
    total
    price
    vat
    floor{
      total
      vat
      price
      id
    }
    items{
      total
    }
  }
}`;
//#endregion
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private apollo: Apollo) { }
  get token() {
    return localStorage.getItem('token')
  }
  getPrice(input: any): Observable<any> {
    return this.apollo.query({
      query: gqlGetPrice,
      variables: {
        id: input.id,
        payment: input.payment,
        token: this.token
      }
    })
  }
  makeOrder(input: any): Observable<any> {
    return this.apollo.query({
      query: gqlMakeOrder,
      variables: {
        payment: input.payment,
        id: input.id,
        token: this.token
      }
    })
  }
  orderSuccess(input: any): Observable<any> {
    return this.apollo.query({
      query: gqlOrderSuccess,
      variables: {
        sessionID: input.sessionID,
        tokenPayment: input.tokenPayment
      }
    })
  }
}
