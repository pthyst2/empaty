import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CollaboratorService } from 'src/app/services/data/collaborator.service';
import { AuthService } from 'src/app/services/data/auth.service';
@Component({
  selector: 'modal-delete-user',
  templateUrl: './modal-delete-user.component.html',
  styleUrls: ['./modal-delete-user.component.sass'],
})
export class ModalDeleteUserComponent implements OnInit {
  @Input() collaborator: any;
  @Input() show: boolean = false;
  @Output() closed = new EventEmitter();

  popup: any = {
    show: false,
    icon: 'success',
    title: 'Collaborator deleted',
    timer: undefined,
  };

  constructor(
    private collabService: CollaboratorService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  close(data?: any) {
    this.closed.emit(data ? data : false);
  }
  confirm() {
    let user: any = this.authService.getUserDecoded();
    let data = {
      user: user._id,
      collaborator: this.collaborator._id,
    };
    let res: any = this.collabService.deleteCollaborator(data);
    if (res.status == 200) {
      this.close(true);
      this.popup = {
        show: true,
        icon: 'success',
        title: 'Collaborator deleted',
        timer: 1500,
      };
    } else {
      this.close(false);
      this.popup = {
        show: true,
        icon: 'error',
        title: "Can't delete",
        html: 'Error when deleting collaborator',
      };
    }
  }
}
