import { Component, Input } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/data/auth.service';
import { UserCardService } from 'src/app/services/data/user-card.service';
@Component({
  selector: 'modal-purchase-plan',
  templateUrl: './modal-purchase-plan.component.html',
  styleUrls: ['./modal-purchase-plan.component.sass'],
})
export class ModalPurchasePlanComponent extends ModalBaseComponent {
  @Input() show: boolean = false;
  @Input() plan: any;
  user: any;
  payment: any;

  faTimes = faTimes;

  constructor(private authService: AuthService, private cardService: UserCardService){
    super();
  }
  override ngOnInit(): void {
    this.getUser();
    if (this.user) {
      this.getPayment();
    }
  }

  override close(data?:any) {
    super.closed.emit(data ? data : false)
  }

  getUser(){
    this.user = this.authService.getUserDecoded();
  }
  getPayment(){
    this.payment = this.cardService.getCard(this.user._id)
  }
}
