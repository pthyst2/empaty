import { Component, OnInit } from '@angular/core';
import { solidAppInfo } from 'src/app/data/solids/solidAppInfo';
import { solidNavHeaderHome } from 'src/app/data/solids/solidNavHeaderHome';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/services/utilities/lang.service';
import { AuthService } from 'src/app/services/data/auth.service';
@Component({
  selector: 'layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.sass'],
})
export class LayoutHomeComponent implements OnInit {
  user: any;
  navs: any = solidNavHeaderHome;
  logoUrl: string = solidAppInfo.logoUrl;

  constructor(
    private translate: TranslateService,
    private lang: LangService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn() == true) {
      this.getUser();
    }
    this.setLang();
  }

  getUser() {
    this.authService.getUserInfo().subscribe({
      next: (res: any) => {
        this.user = res.data.userInfo;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  setLang() {
    this.lang.setLang(this.translate);
  }
}
