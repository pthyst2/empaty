import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { DragScrollComponent } from 'ngx-drag-scroll';
@Component({
  selector: 'slider-base',
  templateUrl: './slider-base.component.html',
  styleUrls: ['./slider-base.component.sass'],
})
export class SliderBaseComponent implements OnInit {
  faPrev = faAngleLeft;
  faNext = faAngleRight;

  @Input() items: any = [
    {
      img: 'https://loremflickr.com/g/600/400/paris',
    },
    {
      img: 'https://loremflickr.com/600/400/brazil,rio',
    },
    {
      img: 'https://loremflickr.com/600/400/paris,girl/all',
    },
    {
      img: 'https://loremflickr.com/g/600/400/paris',
    },
    {
      img: 'https://loremflickr.com/600/400/brazil,rio',
    },
    {
      img: 'https://loremflickr.com/600/400/paris,girl/all',
    },
  ];

  @ViewChild('slider', { read: DragScrollComponent }) ds!: DragScrollComponent;
  constructor() {}

  ngOnInit(): void {}
  prev() {
    this.ds.moveLeft();
  }
  next() {
    this.ds.moveRight();
  }
}
