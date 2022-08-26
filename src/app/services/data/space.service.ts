import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

//#region Mocks 
import { mockSpaceCategories } from 'src/app/data/mocks/mockSpaceCategories';
import { mockServiceTypes } from 'src/app/data/mocks/mockServiceTypes';
//#endregion

const categories = mockSpaceCategories;
const serviceTypes = mockServiceTypes;
//#region Queries
const gqlSearchFloors = gql`query searchfloors($name: String!, $service: String!, $token: String!, $limit: Int!, $start: Int!){
  searchfloors(name: $name, service: $service, token: $token, limit: $limit, start: $start){
    total
    items {
      id
      name
      name_ja
      description
      service
      image
      created
      modified
      status
      width
      length
      paid
    }
  }
}`;
const gqlGetPublisheds = gql`query paidFloors($token:String!,$limit:Int!,$start:Int!){
  paidfloors(
      token: $token,
		limit:$limit,
    start:$start
  ){
    total
    items{
      id
      image
      name
      modified
      created
      service
      width
      length
    }
  }
}`;
const gqlCreateFloor = gql`
  mutation createFloor(
    $name: String!
    $description: String!
    $data: String!
    $token: String!
    $service: String!,
    $width: Int!,
    $length: Int!,
  ) {
    createFloor(
      input: {
        data: $data
        description: $description
        image: ""
        items: ""
        name: $name
        nameja: $name
        service: $service
        token: $token,
        width: $width,
        length: $length
      }
    )
  }
`;
const gqlEditFloor = gql`
  mutation editSpace(
    $id: String!
    $name: String!
    $nameja: String!
    $description: String!
    $service: String!
    $token: String!
  ) {
    editSpace(
      input: {
        id: $id
        name: $name
        nameja: $nameja
        description: $description
        service: $service
        token: $token
      }
    )
  }
`;
const gqlDeleteFloor = gql`
  mutation deleteFloor($Id: String!, $token: String!) {
    deleteFloor(Id: $Id, token: $token)
  }
`;
const gqlGetFloor = gql`query floor($id: String!, $token: String!){
	floor(id:$id,token: $token){
		id
    name
    name_ja
    service
    description
    image
    items
    width
    length
  }
}`;
//#endregion

@Injectable({
  providedIn: 'root',
})
export class SpaceService {
  constructor(private http: HttpClient, private apollo: Apollo) { }
  get token() {
    return localStorage.getItem('token');
  }
  getSpaces(body?: any): Observable<any> {
    let variables: any = {
      name: '',
      service: 'All',
      token: localStorage.getItem('token'),
      limit: 0,
      start: 0
    }

    if (body) {
      if (body.name) { variables.name = body.name }
      if (body.service) { variables.service = body.service }
      if (body.limit) { variables.limit = body.limit }
      if (body.start) { variables.start = body.start }
    }

    return this.apollo.query({
      query: gqlSearchFloors,
      variables: variables
    });
  }
  getSpaceDetail(id: string): Observable<any> {
    return this.apollo.query({
      query: gqlGetFloor,
      variables: {
        id: id,
        token: localStorage.getItem('token')
      }
    });
  }
  deleteSpace(id: string): Observable<any> {
    return this.apollo.mutate({
      mutation: gqlDeleteFloor,
      variables: {
        token: localStorage.getItem('token'),
        Id: id,
      },
    });
  }
  getSpaceEncodedData(w: number, h: number): Observable<any> {
    return this.http.get(
      'http://3d.optimizer.vn/json/?w=' + w.toString() + '&h=' + h.toString()
    );
  }
  createSpace(body: any): Observable<any> {
    return this.apollo.mutate({
      mutation: gqlCreateFloor,
      variables: {
        data: body.data,
        description: body.description,
        image: '',
        items: '',
        name: body.name,
        nameja: body.name,
        service: body.service,
        token: localStorage.getItem('token'),
        width: body.width,
        length: body.length
      },
    });
  }
  updateSpace(body: any) {
    return this.apollo.mutate({
      mutation: gqlEditFloor,
      variables: {
        id: body.id,
        description: body.description,
        name: body.name,
        nameja: body.nameja,
        service: body.service,
        token: localStorage.getItem('token'),
      },
    });
  }
  getCategories() {
    return {
      status: 200,
      data: categories,
    };
  }
  getServiceTypes() {
    return serviceTypes;
  }
  getPublishedSpaces(body?: any): Observable<any> {
    let variables: any = {
      token: this.token,
      limit: 0,
      start: 0
    }

    if (body) {
      if (body.limit) { variables.limit = body.limit }
      if (body.start) { variables.start = body.start }
    }

    return this.apollo.query({
      query: gqlGetPublisheds,
      variables: variables
    })
  }
  getSafeName(raw: string) {
    let result = '';
    result = raw.toLocaleLowerCase();
    while (result.includes(' ') == true) {
      result = result.replace(' ', '_')
    }
    return result;
  }
}
