import { Component, Input } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { CollaboratorService } from 'src/app/services/data/collaborator.service';
@Component({
  selector: 'modal-delete-collaborator',
  templateUrl: './modal-delete-collaborator.component.html',
  styleUrls: ['./modal-delete-collaborator.component.sass'],
})
export class ModalDeleteCollaboratorComponent extends ModalBaseComponent {
  @Input() collaborator: any;
  constructor(private collabService: CollaboratorService) {
    super();
  }

  deleteCollab() {
    try {
      let res = this.collabService.deleteCollaborator(this.collaborator._id);
      if (res.status == 200) {
        super.close(true);
      }
    } catch (err) {
      super.close(false);
      console.error('Error while trying to delete collaborator: ', err);
    }
  }
}
