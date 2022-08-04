import { Component, OnInit } from '@angular/core';
import { PopupMessageService } from 'src/app/services/utilities/popup-message.service';
import { OrderService } from 'src/app/services/data/order.service';
import { AuthService } from 'src/app/services/data/auth.service';
import { UserCardService } from 'src/app/services/data/user-card.service';
import { faPlus, faMinus, faPencil } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'page-member-order',
  templateUrl: './page-member-order.component.html',
  styleUrls: ['./page-member-order.component.sass'],
})
export class PageMemberOrderComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;
  faEdit = faPencil;

  spaceOrder: any;
  user: any;
  card: any;

  cardImages = {
    visa: environment.imageUrls.logos + 'logo-visa.png',
    master: environment.imageUrls.logos + 'logo-master-card.png',
    jcb: environment.imageUrls.logos + 'logo-jcb.png',
  };

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private ccService: UserCardService,
    private popup: PopupMessageService
  ) {}
  ngOnInit(): void {
    this.getSpaceOrder();
    this.getUserInfo();
  }

  getSpaceOrder() {
    let res = this.orderService.getSpaceOrder();
    this.spaceOrder = res.data;
  }

  getUserInfo() {
    this.user = this.authService.getUserDecoded();
    this.getCCInfo();
  }
  getCCInfo() {
    let res = this.ccService.getCard(this.user._id);
    this.card = res.data;
  }
}
