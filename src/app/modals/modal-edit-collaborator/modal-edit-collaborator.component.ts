import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CollaboratorService } from 'src/app/services/data/collaborator.service';

@Component({
  selector: 'modal-edit-collaborator',
  templateUrl: './modal-edit-collaborator.component.html',
  styleUrls: ['./modal-edit-collaborator.component.sass'],
})
export class ModalEditCollaboratorComponent implements OnInit {
  @Input() collaborator: any;
  @Output() closed = new EventEmitter();
  roles: any = [];
  role: any;
  permissions: any = {
    invoice: false,
    billing: false,
    email: false,
  };
  constructor(private collabService: CollaboratorService) {}
  ngOnInit(): void {
    this.getRoles();
    this.getRoleAndPermission();
  }
  close(data?: any) {
    this.closed.emit(data ? data : false);
  }
  getRoles() {
    let res = this.collabService.getRoles();
    this.roles = res.data;
  }
  getRoleAndPermission() {
    this.role = this.collaborator.role.value;
  }
  saveChange() {
    let data = {
      _id: this.collaborator._id,
      role: this.role,
      permissions: this.permissions,
    };
    this.close(true);
  }
}
