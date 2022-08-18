import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

//#region Mocks
import { mockSpaces } from 'src/app/data/mocks/mockSpaces';
import { mockSpaceCategories } from 'src/app/data/mocks/mockSpaceCategories';
import { mockServiceTypes } from 'src/app/data/mocks/mockServiceTypes';
//#endregion

const spaces = mockSpaces;
const categories = mockSpaceCategories;
const serviceTypes = mockServiceTypes;
//#region Queries
const gqlFloors = gql`
  query floors($token: String!, $limit: Int!, $start: Int!) {
    floors(token: $token, limit: $limit, start: $start) {
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
      }
    }
  }
`;
const gqlServiceFloors = gql`
  query serviceFloors(
    $service: String!
    $token: String!
    $limit: Int!
    $start: Int!
  ) {
    servicefloors(
      service: $service
      token: $token
      limit: $limit
      start: $start
    ) {
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
      }
    }
  }
`;
const gqlCreateFloor = gql`
  mutation createFloor(
    $name: String!
    $description: String!
    $data: String!
    $token: String!
    $service: String!
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
        token: $token
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
//#endregion

@Injectable({
  providedIn: 'root',
})
export class SpaceService {
  constructor(private http: HttpClient, private apollo: Apollo) {}
  getSpaces(body: any): Observable<any> {
    return this.apollo.query({
      query: gqlFloors,
      variables: {
        token: localStorage.getItem('token'),
        limit: body.limit ? body.limit : 0,
        start: body.start ? body.start : 0,
      },
    });
  }
  getServiceSpaces(body: any): Observable<any> {
    let test = {
      service: body.service,
      token: localStorage.getItem('token'),
      limit: body.limit ? body.limit : 0,
      start: body.start ? body.start : 0,
    };
    console.log('body to query: ', test);

    return this.apollo.query({
      query: gqlServiceFloors,
      variables: {
        service: body.service,
        token: localStorage.getItem('token'),
        limit: body.limit ? body.limit : 0,
        start: body.start ? body.start : 0,
      },
    });
  }

  getSpaceDetail(_id: string) {
    let res: any = {
      status: 200,
      data: null,
    };
    for (let space of spaces) {
      if (space._id == _id) {
        res.data = space;
      }
    }
    return res;
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
  getPublishedSpaces() {
    let res: any = {
      status: 200,
      count: 0,
      data: [],
    };
    for (let space of spaces) {
      if (space.status == 'published') {
        res.data.push(space);
        res.count++;
      }
    }
    return res;
  }
}
