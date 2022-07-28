import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { DragScrollComponent } from 'ngx-drag-scroll';
@Component({
  selector: 'slider-create-space',
  templateUrl: './slider-create-space.component.html',
  styleUrls: ['./slider-create-space.component.sass'],
})
export class SliderCreateSpaceComponent implements OnInit {
  faPrev = faAngleLeft;
  faNext = faAngleRight;

  @Input() items: any = [];

  @ViewChild('slider', { read: DragScrollComponent }) ds!: DragScrollComponent;

  @Output() space = new EventEmitter<any>();
  selected: any;
  constructor() {}

  ngOnInit(): void {}
  prev() {
    this.ds.moveLeft();
  }
  next() {
    this.ds.moveRight();
  }
  selectSpace(item: any) {
    this.selected = item;
    this.space.emit(item);
  }
}
