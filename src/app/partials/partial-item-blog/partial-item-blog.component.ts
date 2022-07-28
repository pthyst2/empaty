import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'partial-item-blog',
  templateUrl: './partial-item-blog.component.html',
  styleUrls: ['./partial-item-blog.component.sass'],
})
export class PartialItemBlogComponent implements OnInit {
  @Input() item: any;
  btnReadMore = {
    label: 'Read More',
  };
  constructor() {}

  ngOnInit(): void {
    this.setNoImage();
  }
  setNoImage() {
    if (!this.item.thumbnail) {
      this.item.thumbnail = environment.imageUrls.none;
    }
  }
}
