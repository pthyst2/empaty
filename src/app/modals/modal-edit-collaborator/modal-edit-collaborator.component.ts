import { Component, Input } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { CollaboratorService } from 'src/app/services/data/collaborator.service';
@Component({
  selector: 'modal-edit-collaborator',
  templateUrl: './modal-edit-collaborator.component.html',
  styleUrls: ['./modal-edit-collaborator.component.sass'],
})
export class ModalEditCollaboratorComponent extends ModalBaseComponent {
  @Input() collaborator: any;
  constructor(private collabService: CollaboratorService) {
    super();
  }
}
