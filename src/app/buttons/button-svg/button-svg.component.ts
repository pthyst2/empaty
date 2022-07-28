import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'button-svg',
  templateUrl: './button-svg.component.html',
  styleUrls: ['./button-svg.component.sass'],
})
export class ButtonSvgComponent implements OnInit {
  @Input() type: string = 'button';
  @Input() svg: string = 'add-space-by-image';
  @Input() label: string = '';

  constructor() {}

  ngOnInit(): void {
    this.getSvg();
  }

  getSvg() {
    this.svg = environment.imageUrls.svg + this.svg + '.svg';
  }
}
