import { Component, OnDestroy, OnInit } from '@angular/core';
import { PopupMessageService } from 'src/app/services/utilities/popup-message.service';
import { OrderService } from 'src/app/services/data/order.service';
import { AuthService } from 'src/app/services/data/auth.service';
import { UserCardService } from 'src/app/services/data/user-card.service';
import { faPlus, faMinus, faPencil } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { SpaceService } from 'src/app/services/data/space.service';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/services/utilities/image.service';
import { CreditCardService } from 'src/app/services/utilities/credit-card.service';
@Component({
  selector: 'page-member-order',
  templateUrl: './page-member-order.component.html',
  styleUrls: ['./page-member-order.component.sass'],
})
export class PageMemberOrderComponent implements OnInit, OnDestroy {
  faPlus = faPlus;
  faMinus = faMinus;
  faEdit = faPencil;
  loading = false;
  space: any;
  order: any;
  user: any;
  card: any;
  image: any;
  cardImages = {
    visa: environment.imageUrls.logos + 'logo-visa.png',
    master: environment.imageUrls.logos + 'logo-master-card.png',
    jcb: environment.imageUrls.logos + 'logo-jcb.png',
  };
  subs = new Subscription;
  payment: any = 'month';
  constructor(
    private orderService: OrderService,
    private ccService: UserCardService,
    private ccUtility: CreditCardService,
    private aroute: ActivatedRoute,
    private spaceService: SpaceService,
    private imageService: ImageService,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    this.getUser();
    this.getSpace();
    this.getCardInfo();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  getUser() {
    this.subs.add(this.authService.getUserInfo().subscribe({
      next: (res: any) => {
        this.user = res.data.userInfo;
      },
      error: (err) => {
        console.error("Error when getting user info: ", err)
      }
    }))
  }
  getSpace() {
    let id: any = this.aroute.snapshot.paramMap.get("id");
    this.loading = true;
    this.subs.add(this.spaceService.getSpaceDetail(id).subscribe({
      next: (res: any) => {
        this.space = res.data.floor;
        if (this.space.image) {
          this.image = this.imageService.convertBase64(this.space.image);
        }
        this.loading = false;
        this.getPrice();
      },
      error: (err) => {
        console.error('Error when getting space detail: ', err)
      }
    }))
  }
  getPrice() {
    let input: any = {
      id: this.space.id,
      payment: this.payment
    }
    this.subs.add(this.orderService.getPrice(input).subscribe({
      next: (res: any) => {
        this.order = res.data.pricefloor;
      },
      error: (err: any) => {
        console.error("Error when get price of order: ", err)
      }
    }));
  }
  getCardInfo() {
    this.card = this.ccService.getCard("1").data;
    this.card.last4 = this.ccUtility.getLast4(this.card.cardNumber);
  }
  makeOrder() {
    this.subs.add(this.orderService.makeOrder({
      payment: this.payment,
      id: this.space.id
    }).subscribe({
      next: (res: any) => {
        window.location.assign(res.data.paymentFloor);
      },
      error: (err) => {
        console.error("Error when making new order: ", err)
      }
    }))
  }
}
