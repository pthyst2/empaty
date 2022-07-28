import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/data/product.service';
import { PopupMessageService } from 'src/app/services/utilities/popup-message.service';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'page-member-products',
  templateUrl: './page-member-products.component.html',
  styleUrls: ['./page-member-products.component.sass'],
})
export class PageMemberProductsComponent implements OnInit {
  faRefresh = faArrowsRotate;
  limit: number = 25;
  offset: number = 0;
  categories: any = [];
  products: any = [];
  constructor(
    private productService: ProductService,
    private popupService: PopupMessageService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.searchProducts();
  }

  loadCategories() {
    let res = this.productService.getCategories();
    this.categories = res.data;
  }

  searchProducts(body?: any) {
    try {
      let data = {
        keyword: '',
        category: '',
        offset: this.offset,
        limit: this.limit,
      };

      if (body) {
        if (body.keyword) {
          data.keyword = body.keyword;
        }
        if (body.category) {
          data.category = body.category;
        }
        if (body.offset) {
          data.offset = body.offset;
        }
        if (body.limit) {
          data.limit = body.limit;
        }
      }

      let res = this.productService.getProducts(data);
      if (res.status == 200) {
        this.products = res.data;
      }
    } catch (err) {
      console.error('Error when loading products: ', err);
    }
  }
}
