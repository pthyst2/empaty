import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'modal-base',
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.sass'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
          transform: 'scale(1)',
        })
      ),
      state(
        'close',
        style({
          opacity: 0.5,
          transform: 'scale(0.0)',
        })
      ),
      transition('open => close', [animate('00ms')]),
      transition('close => open', [animate('150ms')]),
    ]),
  ],
})
export class ModalBaseComponent implements OnInit, OnDestroy {
  @Input() size: any;
  @Input() static: boolean = false;
  @Input() position: string = 'center';
  @Output() closed = new EventEmitter<any>();

  positionClasses: any;

  isOpen = false;

  constructor() {
    setTimeout(() => (this.isOpen = true), 0);
  }
  ngOnInit(): void {
    this.getSize();
    this.getPosition();
  }
  ngOnDestroy(): void {
    setTimeout(() => (this.isOpen = false), 0);
    console.log('Modal base is destroyed.');
  }
  getSize() {
    let result = 'min-w-0 min-h-0';
    switch (this.size) {
      case 'xs': {
        result = 'min-w-[200px] min-h-[180px]';
        break;
      }
      case 'sm': {
        result = 'min-w-40per min-h-40per';
        break;
      }
      case 'md': {
        result = 'min-w-50per min-h-50per';
        break;
      }
      case 'lg': {
        result = 'min-w-75per min-h-75per';
        break;
      }
      case 'xl': {
        result = 'min-w-90per min-h-90per';
        break;
      }
    }
    return result;
  }
  getPosition() {
    switch (this.position) {
      case 'center': {
        this.positionClasses =
          'left-1/2 top-1/4 lg:top-1/2 -translate-y-1/4 -translate-x-1/2 lg:-translate-y-1/2';
        break;
      }
      case 'bottom-right': {
        this.positionClasses = 'bottom-[16px] right-[16px]';
        break;
      }
    }
  }
  close(data?: any) {
    this.closed.emit(data ? data : false);
  }
}
