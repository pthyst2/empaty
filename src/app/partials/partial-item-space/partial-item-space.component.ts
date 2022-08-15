import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'partial-item-space',
  templateUrl: './partial-item-space.component.html',
  styleUrls: ['./partial-item-space.component.sass'],
})
export class PartialItemSpaceComponent implements OnInit {
  @Input() space: any = {};

  constructor() {}
  ngOnInit(): void {
    this.setNoImage();
  }
  setNoImage() {
    this.space.thumbnail = this.space.thumbnail
      ? this.space.thumbnail
      : 'assets/images/solids/spaces/no-image.png';
  }
}
