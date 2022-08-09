import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/data/auth.service';
import { CollaboratorService } from 'src/app/services/data/collaborator.service';
@Component({
  selector: 'page-member-roles',
  templateUrl: './page-member-roles.component.html',
  styleUrls: ['./page-member-roles.component.sass'],
})
export class PageMemberRolesComponent implements OnInit {
  user: any;
  users: any = [];

  role: any = '';
  status: any = '';

  loading = false;
  modals = {
    invite: false,
    delete: false,
  };
  popup: any = {
    show: false,
    icon: '',
    title: '',
    html: '',
    timer: undefined,
  };

  constructor(
    private authService: AuthService,
    private collabService: CollaboratorService
  ) {}

  ngOnInit(): void {
    this.getData('user');
    if (this.user) {
      this.getData('users');
    }
  }

  getData(name: string) {
    switch (name) {
      case 'user': {
        this.user = this.authService.getUserDecoded();
        break;
      }
      case 'users': {
        this.loading = true;
        this.users = this.collabService.getCollaborators(this.user._id).data;
        setTimeout(() => {
          this.loading = false;
        }, 1500);
        console.log('this.users: ', this.users);
        break;
      }
    }
  }
  catchChangeRole() {
    if (this.role != '') {
      this.getUsersByRole();
    } else {
      this.getData('users');
    }
  }
  catchChangeStatus() {
    if (this.status != '') {
      this.getUsersByStatus();
    } else {
      this.getData('users');
    }
  }
  getUsersByRole() {
    this.loading = true;
    this.users = this.collabService.getCollaboratorsByRole(
      this.user._id,
      this.role
    ).data;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
  getUsersByStatus() {
    this.loading = true;
    this.users = this.collabService.getCollaboratorsByStatus(
      this.user._id,
      this.status
    ).data;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
  toggleModal(name: string, event?: any) {
    switch (name) {
      case 'invite': {
        this.modals.invite = !this.modals.invite;
        if (event && event == true) {
          this.getData('users');
        }
        break;
      }
      case 'delete': {
        this.modals.delete = !this.modals.delete;
        if (event && event == true) {
          this.getData('users');
        }
        break;
      }
    }
  }
}
