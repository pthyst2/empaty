import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

//#region Mocks
import { mockSpaces } from 'src/app/data/mocks/mockSpaces';
import { mockSpaceCategories } from 'src/app/data/mocks/mockSpaceCategories';
//#endregion

const spaces = mockSpaces;
const categories = mockSpaceCategories;

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
        created
        status
        image
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
    floors(service: $service, token: $token, limit: $limit, start: $start) {
      total
      items {
        id
        name
        description
        name_ja
        created
        image
      }
    }
  }
`;
const gqlCreateFloor = gql`
  mutation createFloor($input: NewHouse!) {
    createFloor(input: $input)
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
  deleteSpace(_id: string) {
    return {
      status: 200,
    };
  }

  getSpaceEncodedData(w: number, h: number): Observable<any> {
    return this.http.get(
      'http://3d.optimizer.vn/json/?w=' + w.toString() + '&h=' + h.toString()
    );
  }

  createSpace(body: any): Observable<any> {
    let input: any = {
      token: localStorage.getItem('token'),
      name: body.name,
      nameja: '',
      description: body.description,
      image: body.image ? body.image : '',
      items: '',
      data: '',
      service: body.service,
    };
    let subs = new Subscription();
    subs.add(
      this.getSpaceEncodedData(body.width, body.length).subscribe({
        next: (res: any) => {
          input.data = res.data;
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          subs.unsubscribe();
        },
      })
    );
    console.log('input to mutate: ', input);
    return this.apollo.mutate({
      mutation: gqlCreateFloor,
      variables: {
        input: input,
      },
    });
  }

  getCategories() {
    return {
      status: 200,
      data: categories,
    };
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
  updateSpace(body: any) {
    return {
      status: 200,
    };
  }
}
