import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InvoiceService } from 'src/app/services/data/invoice.service';
import { solidAppInfo } from 'src/app/data/solids/solidAppInfo';
@Component({
  selector: 'page-member-invoice-detail',
  templateUrl: './page-member-invoice-detail.component.html',
  styleUrls: ['./page-member-invoice-detail.component.sass'],
})
export class PageMemberInvoiceDetailComponent implements OnInit {
  loading: boolean = false;
  invoice: any;
  logo = solidAppInfo.logoColorUrl;

  constructor(
    private router: Router,
    private aroute: ActivatedRoute,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit(): void {
    this.getInvoice();
  }

  getInvoice() {
    this.loading = true;
    let id: any = this.aroute.snapshot.paramMap.get('id');
    let res: any = this.invoiceService.getDetail(id);
    if (res.status == 200) {
      this.invoice = res.data;
      console.log('invoice: ', this.invoice);
    }
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
}
