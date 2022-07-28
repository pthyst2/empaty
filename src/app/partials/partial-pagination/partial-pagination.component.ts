import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'partial-pagination',
  templateUrl: './partial-pagination.component.html',
  styleUrls: ['./partial-pagination.component.sass'],
})
export class PartialPaginationComponent implements OnInit {
  faPrev = faAngleLeft;
  faNext = faAngleRight;

  @Input() nav: any = {
    pages: 10,
    currentPage: 1,
  };
  links: any = [];

  @Output() pageClicked = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.generateLinks();
  }

  generateLinks() {
    this.links = [];
    for (let i = 1; i <= this.nav.pages; i++) {
      this.links.push(i);
    }
  }

  pagePressed(page: number) {
    this.pageClicked.emit(page);
  }
}
