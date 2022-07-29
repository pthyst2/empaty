import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'partial-item-public-space',
  templateUrl: './partial-item-public-space.component.html',
  styleUrls: ['./partial-item-public-space.component.sass'],
})
export class PartialItemPublicSpaceComponent implements OnInit {
  @Input() space: any;

  modal = false;

  constructor() {}

  ngOnInit(): void {}
  toggleModal(value?: any) {
    this.modal = !this.modal;
  }
}
