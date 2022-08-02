import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/data/product.service';
import { ProductCategoryService } from 'src/app/services/data/product-category.service';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'page-member-products',
  templateUrl: './page-member-products.component.html',
  styleUrls: ['./page-member-products.component.sass'],
})
export class PageMemberProductsComponent implements OnInit {
  faRefresh = faArrowsRotate;
  limit: number = 10;
  offset: number = 0;

  nav: any = {
    pages: 1,
    currentPage: 1,
  };

  categories: any = [];
  products: any = [];

  loading = false;

  constructor(
    private productService: ProductService,
    private categoryService: ProductCategoryService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.searchProducts();
  }

  loadCategories() {
    this.categoryService.getAll().subscribe({
      next: (res) => {
        console.log('res: ', res);
        this.categories = res[0].items;
      },
      error: (err) => {
        console.error('Error when loading product categories: ', err);
      },
    });
  }

  searchProducts(page?: number) {
    /*let data = {
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
      }*/
    /*let res = this.productService.getProducts();
    this.products = res.data;*/

    this.loading = true;
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res[0].items;
        this.nav.pages = Math.ceil(res[0].total / this.limit);
      },
      error: (err) => {
        console.error('Error when loading all products: ', err);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
