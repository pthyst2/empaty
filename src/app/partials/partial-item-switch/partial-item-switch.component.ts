import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'partial-item-switch',
  templateUrl: './partial-item-switch.component.html',
  styleUrls: ['./partial-item-switch.component.sass'],
})
export class PartialItemSwitchComponent implements OnInit {
  @Input() trueLabel: string = 'ON';
  @Input() falseLabel: string = 'OFF';
  @Output() changed = new EventEmitter();
  state = false;
  constructor() {}
  ngOnInit(): void {}
  switchState(state: boolean) {
    this.state = state;
    this.changed.emit(state);
  }
}
