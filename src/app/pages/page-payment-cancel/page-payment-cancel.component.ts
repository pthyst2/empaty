import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'page-payment-cancel',
  templateUrl: './page-payment-cancel.component.html',
  styleUrls: ['./page-payment-cancel.component.sass']
})
export class PagePaymentCancelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.backToOrder();
  }
  backToOrder() {
    setTimeout(
      () => {
        this.router.navigate(["/member/order-space"]);
      }, 2500
    )
  }
}
