import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//#region Mocks
import { mockSpaces } from 'src/app/data/mocks/mockSpaces';
//#endregion

@Injectable({
  providedIn: 'root',
})
export class SpaceService {
  spaces: any = mockSpaces;
  constructor(private http: HttpClient) {}
  getSpaces(body?: any) {
    let spaces = this.spaces;
    let res: any = {
      data: [],
      limit: 20,
      offset: 0,
      count: spaces.length,
      pages: 0,
    };

    if (body) {
      if (body.limit) {
        res.limit = body.limit;
      }
      if (body.offset) {
        res.offset = body.offset;
      }
    }

    let pages = Math.floor(spaces.length / res.limit);
    if (spaces.length % res.limit > 0) {
      pages++;
    }
    res.pages = pages;

    /*
    Examples:
    1. offset = 0, limit = 5 => start = spaces[0], end = spaces[4]
    2. offset = 5, limit = 5 => start = spaces[5], end = spaces[9]
    3. offset = 10, limit = 5 => start = spaces[10], end = spaces[14]
    => start = spaces[offset], end = spaces[offset + limit - 1]
    */
    let start = res.offset;
    let end = start + res.limit - 1;
    for (let i = start; i <= end; i++) {
      let item: any = spaces[i];
      if (!item) {
        break;
      } else {
        res.data.push(item);
      }
    }
    return res;
  }
  getSpacesNoLimit(body: any) {
    let spaces = this.spaces;
    let res: any = {
      data: spaces,
      count: spaces.length,
    };
    return res;
  }
  getSpaceDetail(_id: string) {
    let res = {
      data: null,
    };
    for (let space of this.spaces) {
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
  createSpace(body: any) {
    return {
      status: 201,
    };
  }
}
