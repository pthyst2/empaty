import { Component, OnInit } from '@angular/core';
import { solidNavFooterAuth } from 'src/app/data/solids/solidNavFooterAuth';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/services/utilities/lang.service';
@Component({
  selector: 'layout-auth',
  templateUrl: './layout-auth.component.html',
  styleUrls: ['./layout-auth.component.sass'],
})
export class LayoutAuthComponent implements OnInit {
  footerNavs = solidNavFooterAuth;
  constructor(private translate: TranslateService, private lang: LangService,) { }
  ngOnInit(): void {
    this.setLang()
  }
  setLang() {
    this.lang.setLang(this.translate);
  }
}
