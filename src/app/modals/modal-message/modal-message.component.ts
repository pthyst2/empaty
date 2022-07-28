import { Component, Input, HostBinding, OnDestroy } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { environment } from 'src/environments/environment';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.sass'],
  
})  
export class ModalMessageComponent extends ModalBaseComponent  {
  faTimes = faTimes;
  iconUrl = environment.imageUrls.svg;
  iconSrc: any;

  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() html: string = '';
  @Input() timer!: number;

  constructor() {
    super();    
  }
  override ngOnInit(): void {
    this.renderIcon();
    if (this.timer) {
      setTimeout(
        () => {
          super.close(false)
        }, this.timer
      )
    }
  
  }
 
  renderIcon() {
    switch (this.icon) {
      case 'success': {
        this.iconSrc = this.iconUrl + 'popup-icon-success.svg';
        break;
      }
      case 'error': {
        this.iconSrc = this.iconUrl + 'popup-icon-error.svg';
        break;
      }
    }
  }
}
