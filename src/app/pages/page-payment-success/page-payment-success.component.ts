import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/data/order.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'page-payment-success',
  templateUrl: './page-payment-success.component.html',
  styleUrls: ['./page-payment-success.component.sass']
})
export class PagePaymentSuccessComponent implements OnInit, OnDestroy {
  brandName: string = environment.appName;
  constructor(private aroute: ActivatedRoute, private orderService: OrderService) { }
  sessionID: any;
  tokenPayment: any;
  subs = new Subscription;
  ngOnInit(): void {
    this.catchParams();
    this.orderSuccess();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  catchParams() {
    let params: any = this.aroute.snapshot.queryParams;
    this.sessionID = params["session"];
    this.tokenPayment = params["token"];
  }
  orderSuccess() {
    this.subs.add(this.orderService.orderSuccess({
      sessionID: this.sessionID,
      tokenPayment: this.tokenPayment
    }).subscribe({
      next: (res: any) => {
        console.log("res: ", res)
      },
      error: (err) => {
        console.error("Error when confirm order success: ", err)
      }
    }))
  }
}
