import { Component, OnInit, Input, Output } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component';

@Component({
  selector: 'modal-pay-space',
  templateUrl: './modal-pay-space.component.html',
  styleUrls: ['./modal-pay-space.component.sass'],
})
export class ModalPaySpaceComponent extends ModalBaseComponent {
  @Input() space: any;
  @Input() override static : boolean = false;
  

  makePayment() {
    super.close(true);
  }
}
