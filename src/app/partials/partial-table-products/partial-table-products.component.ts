import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'partial-table-products',
  templateUrl: './partial-table-products.component.html',
  styleUrls: ['./partial-table-products.component.sass'],
})
export class PartialTableProductsComponent implements OnInit {
  @Input() products: any = [];
  constructor() {}

  ngOnInit(): void {}
}
