import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'partial-copyright',
  templateUrl: './partial-copyright.component.html',
  styleUrls: ['./partial-copyright.component.sass'],
})
export class PartialCopyrightComponent implements OnInit {
  @Input() year: number = 2022;
  @Input() company: string = 'Optimizer Inc';

  copyright = '';

  constructor() {}

  ngOnInit(): void {
    this.setCopyright();
  }
  setCopyright() {
    this.copyright = '©' + this.year.toString() + ' ' + this.company + '. ';
    this.copyright += 'All rights reserved.';
  }
}
