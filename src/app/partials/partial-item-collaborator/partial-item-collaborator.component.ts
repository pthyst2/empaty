import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'partial-item-collaborator',
  templateUrl: './partial-item-collaborator.component.html',
  styleUrls: ['./partial-item-collaborator.component.sass'],
})
export class PartialItemCollaboratorComponent implements OnInit {
  @Input() collaborator: any;
  icon = environment.imageUrls.icon + 'avatar.svg';

  modals = {
    delete: false,
    edit: false,
    message: false,
  };

  message = {
    icon: '',
    title: '',
    html: '',
  };

  constructor() {
    console.log('Collaborator: ', this.collaborator);
  }

  ngOnInit(): void {}

  toggleModal(name: string, content?: any) {
    switch (name) {
      case 'delete': {
        this.modals.delete = !this.modals.delete;
        break;
      }
      case 'edit': {
        this.modals.edit = this.modals.edit;
        break;
      }
      case 'message': {
        this.modals.message = !this.modals.message;
        this.message = content;
        break;
      }
    }
  }
  catchDeleteModal(value: any) {
    this.toggleModal('delete');
    if (value == true) {
      this.toggleModal('message', {
        icon: 'success',
        title: 'Collaborator removed',
      });
    }
  }
  catchEditModal(value: boolean) {
    this.toggleModal('edit');
    if (value == true) {
      this.updateCollaborator();
    }
  }

  updateCollaborator() {
    // Use api getCollabById later
    this.collaborator = this.collaborator;
  }
}
