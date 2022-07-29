import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-make-private',
  templateUrl: './modal-make-private.component.html',
  styleUrls: ['./modal-make-private.component.sass'],
})
export class ModalMakePrivateComponent implements OnInit {
  @Input() space: any;
  @Output() closed = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  close(data?: any) {
    this.closed.emit(data ? data : false);
  }
}
