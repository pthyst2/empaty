import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mockCollaborators } from 'src/app/data/mocks/mockCollaborators';
import { mockCollaboratorRoles } from 'src/app/data/mocks/mockCollaboratorRoles';
const collaborators = mockCollaborators;
const roles = mockCollaboratorRoles;
@Injectable({
  providedIn: 'root',
})
export class CollaboratorService {
  constructor(private http: HttpClient) {}
  getCollaborators(_id: string) {
    let res: any = {
      data: [],
      count: 0,
    };
    for (let item of collaborators) {
      if (item.user == _id) {
        res.data = item.collaborators;
        res.count = res.data.length;
        break;
      }
    }
    return res;
  }
  getRoles() {
    return {
      status: 200,
      data: roles,
    };
  }
  addCollaborator(body: any) {
    return {
      status: 201,
      data: '0523187254abcdefghjkl',
    };
  }
  deleteCollaborator(_id: string) {
    return {
      status: 200,
    };
  }
}
