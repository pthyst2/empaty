import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class LangService {
  constructor() {}
  setLang(trans: TranslateService) {
    let lang: any = localStorage.getItem('lang');
    if (lang) {
      trans.use(lang);
    } else {
      localStorage.setItem('lang', 'en');
      trans.use('en');
    }
  }
}
