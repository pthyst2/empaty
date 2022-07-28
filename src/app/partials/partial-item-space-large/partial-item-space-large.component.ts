import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import {
  faUser,
  faPencil,
  faTrashCan,
  faShareFromSquare,
  faLock,
  faLockOpen,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'partial-item-space-large',
  templateUrl: './partial-item-space-large.component.html',
  styleUrls: ['./partial-item-space-large.component.sass'],
})
export class PartialItemSpaceLargeComponent implements OnInit {
  @Input() space: any;
  @Input() collaborators: any = [];

  modals = {
    store: false,
    makePayment: false,
    addCollaborator: false,
    edit: false,
    delete: false,
  };

  icons = {
    user: faUser,
    edit: faPencil,
    trash: faTrashCan,
    share: faShareFromSquare,
    private: faLock,
    public: faLockOpen,
  };

  svgUrl = environment.imageUrls.svg;
  svgs = {
    store: this.svgUrl + 'store.svg',
    storeColor: this.svgUrl + 'store-color.svg',
    lock: this.svgUrl + 'lock.svg',
    lockColor: this.svgUrl + 'lock-color.svg',
    unlock: this.svgUrl + 'unlock.svg',
    unlockColor: this.svgUrl + 'unlock-color.svg',
    addCollaborator: this.svgUrl + 'add-collaborator.svg',
    addCollaboratorColor: this.svgUrl + 'add-collaborator-color.svg',
    edit: this.svgUrl + 'edit.svg',
    editColor: this.svgUrl + 'edit-color.svg',
    delete: this.svgUrl + 'trash.svg',
    deleteColor: this.svgUrl + 'trash-color.svg',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setNoImage();
    this.setLink();
  }
  setLink() {
    this.space.link = 'member/space/' + this.space._id;
  }
  setNoImage() {
    if (!this.space.thumbnail) {
      this.space.thumbnail = environment.imageUrls.space + 'no-image.png';
    }
  }

  toggleModal(name: string) {
    switch (name) {
      case 'make-payment': {
        this.modals.makePayment = !this.modals.makePayment;
        break;
      }
      case 'add-collaborator': {
        this.modals.addCollaborator = !this.modals.addCollaborator;
        break;
      }
      case 'edit': {
        this.modals.edit = !this.modals.edit;
        break;
      }
      case 'delete': {
        this.modals.delete = !this.modals.delete;
        break;
      }
    }
  }

  catchMakePayment(value: any) {
    if (value != false) {
      this.router.navigate(['/member/order-space']);
    }
    this.toggleModal('make-payment');
  }
}
