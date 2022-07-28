import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-base',
  templateUrl: './button-base.component.html',
  styleUrls: ['./button-base.component.sass'],
})
export class ButtonBaseComponent implements OnInit {
  @Input() label: string = 'Base Button';
  @Input() type: string = 'button';
  @Input() classes: string =
    'px-6 py-2 rounded bg-main hover:bg-transparent text-white hover:text-main border-main border';
  constructor() {}

  ngOnInit(): void {}
  generateClasses() {}
}
