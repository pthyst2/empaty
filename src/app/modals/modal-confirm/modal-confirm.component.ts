import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { environment } from 'src/environments/environment';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.sass'],
})
export class ModalConfirmComponent extends ModalBaseComponent {
  @Input() content: any;
  faTimes = faTimes;
  iconUrl = environment.imageUrls.svg;
  iconSuccess = this.iconUrl + 'popup-icon-success.svg';
  iconError = this.iconUrl + 'popup-icon-error.svg';
  override close(data?: any) {
    super.closed.emit(data ? data : false)   
  } 
}
