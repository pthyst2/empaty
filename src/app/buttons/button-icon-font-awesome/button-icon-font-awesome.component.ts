import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-icon-fa',
  templateUrl: './button-icon-font-awesome.component.html',
  styleUrls: ['./button-icon-font-awesome.component.sass'],
})
export class ButtonIconFontAwesomeComponent implements OnInit {
  @Input() label: string = '';
  @Input() classes: string =
    'py-3 px-8 bg-main text-white border border-main rounded hover:bg-transparent hover:text-main';
  constructor() {}

  ngOnInit(): void {}
}
