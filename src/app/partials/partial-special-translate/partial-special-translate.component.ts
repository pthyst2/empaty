import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'partial-special-translate',
  templateUrl: './partial-special-translate.component.html',
  styleUrls: ['./partial-special-translate.component.sass'],
})
export class PartialSpecialTranslateComponent implements OnInit {
  @Input() key: string = '';
  @Input() data?: any;
  output: any;
  lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
  constructor() {}
  ngOnInit(): void {
    this.render();
  }
  render() {
    let lang: any = localStorage.getItem('lang')
      ? localStorage.getItem('lang')
      : 'en';
    switch (lang) {
      case 'en': {
        this.en();
        break;
      }
      case 'ja': {
        this.ja();
        break;
      }
    }
  }
  en() {
    switch (this.key) {
      case 'size-create': {
        this.output =
          'This space will be create with length ' +
          this.data.length +
          'm and width ' +
          this.data.width +
          'm.';
        break;
      }
    }
  }
  ja() {
    switch (this.key) {
      case 'size-create': {
        this.output =
          '長さ ' +
          this.data.length +
          'm、幅 ' +
          this.data.width +
          'm でスペースが作成されます。';
        break;
      }
    }
  }
}
