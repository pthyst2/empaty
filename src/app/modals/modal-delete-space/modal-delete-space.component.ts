import { Component, OnInit, Input, Output } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { SpaceService } from 'src/app/services/data/space.service';
import { PopupMessageService } from 'src/app/services/utilities/popup-message.service';
@Component({
  selector: ' modal-delete-space',
  templateUrl: './modal-delete-space.component.html',
  styleUrls: ['./modal-delete-space.component.sass'],
})
export class ModalDeleteSpaceComponent extends ModalBaseComponent {
  @Input() override static = false;
  @Input() space : any;

  constructor(private spaceService: SpaceService, private popup: PopupMessageService){
    super();
  }

  override close(value?: any) {
    super.close(value ? value : false)
  }

  confirmDelete(){
    try {
      let res = this.spaceService.deleteSpace(this.space._id);
      if (res.status == 200) {
        this.popup.success({
          title: 'Space deleted'
        });
        this.close(true)
      }
    }
    catch (err) {
      this.popup.error({
        title: "Can't delete space",
        html: err
      })  
    }
  }
}
