import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
@Component({
  selector: 'modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.sass'],
})
export class ModalPopupComponent extends ModalBaseComponent {
  faTimes = faTimes;
  iconUrl = environment.imageUrls.svg;
  iconSuccess = this.iconUrl + 'popup-icon-success.svg';
  iconError = this.iconUrl + 'popup-icon-error.svg';

  @Input() content: any;
  @Input() show: boolean = false;

  constructor() {
    super()
  }
  override ngOnInit(): void {
    if (this.content?.timer) {
      setTimeout(() => {
        this.close(false);
      }, this.content?.timer);
    }
  }

  override close(data?: any) {
    super.close(data? data: false)
  }
}
