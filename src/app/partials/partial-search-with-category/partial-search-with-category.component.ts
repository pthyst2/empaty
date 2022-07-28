import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'partial-search-with-category',
  templateUrl: './partial-search-with-category.component.html',
  styleUrls: ['./partial-search-with-category.component.sass'],
})
export class PartialSearchWithCategoryComponent implements OnInit {
  faSearch = faMagnifyingGlass;
  faTimes = faTimes;

  @Input() categories: any = [];
  @Input() key: string = '_id';
  @Input() label: string = 'name';
  @Output() submit = new EventEmitter();

  category: any;
  keyword: string = '';

  constructor() {}

  ngOnInit(): void {}

  emit() {
    let data = {
      category: this.category,
      keyword: this.keyword,
    };
    this.submit.emit(data);
  }
}
