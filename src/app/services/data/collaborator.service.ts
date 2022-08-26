import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mockCollaborators } from 'src/app/data/mocks/mockCollaborators';
import { mockCollaboratorRoles } from 'src/app/data/mocks/mockCollaboratorRoles';
import { solidCollabStatuses } from 'src/app/data/solids/solidCollabStatuses';
const collaborators = mockCollaborators;
const roles = mockCollaboratorRoles;
const statuses = solidCollabStatuses;
@Injectable({
  providedIn: 'root',
})
export class CollaboratorService {
  constructor(private http: HttpClient) { }
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
  getCollaboratorsByRole(_id: string, role: string) {
    let res: any = {
      data: [],
      count: 0,
    };
    for (let item of collaborators) {
      if (item.user == _id) {
        for (let jtem of item.collaborators) {
          if (jtem.role.value == role) {
            res.data.push(jtem);
          }
        }
        res.count = res.data.length;
        break;
      }
    }
    return res;
  }
  getCollaboratorsByStatus(_id: string, status: string) {
    let res: any = {
      data: [],
      count: 0,
    };
    for (let item of collaborators) {
      if (item.user == _id) {
        for (let jtem of item.collaborators) {
          if (jtem.status.value == status) {
            res.data.push(jtem);
          }
        }
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
  getStatuses() {
    return statuses
  }
  addCollaborator(body: any) {
    return {
      status: 201,
      data: '0523187254abcdefghjkl',
    };
  }
  deleteCollaborator(body: any) {
    return {
      status: 200,
    };
  }
}
