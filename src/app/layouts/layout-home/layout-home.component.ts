import { Component, OnInit } from '@angular/core';
import { solidAppInfo } from 'src/app/data/solids/solidAppInfo';
import { solidNavHeaderHome } from 'src/app/data/solids/solidNavHeaderHome';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/services/utilities/lang.service';
@Component({
  selector: 'layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.sass'],
})
export class LayoutHomeComponent implements OnInit {
  user: any;
  navs: any = solidNavHeaderHome;
  logoUrl: string = solidAppInfo.logoUrl;

  constructor(private translate: TranslateService, private lang: LangService) {}

  ngOnInit(): void {
    this.getUser();
    this.setLang();
  }

  getUser() {
    let localUser: any = localStorage.getItem('user');
    let user = JSON.parse(localUser);
    if (user) {
      this.user = user;
    }
  }
  setLang() {
    this.lang.setLang(this.translate);
  }
}
