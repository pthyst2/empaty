import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/services/utilities/lang.service';
import { AuthService } from 'src/app/services/data/auth.service';
@Component({
  selector: 'layout-member-home',
  templateUrl: './layout-member-home.component.html',
  styleUrls: ['./layout-member-home.component.sass'],
})
export class LayoutMemberHomeComponent implements OnInit {
  linkActive: any;
  user: any;
  constructor(
    private router: Router,
    private translate: TranslateService,
    private lang: LangService,
    private authService: AuthService
  ) {
    this.catchUrl();
  }
  ngOnInit(): void {
    if (this.authService.isLoggedIn() == true) {
      this.getUser();
    }
    this.setLang();
  }
  catchUrl() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        let route = event.url.substring(8);
        this.linkActive = route == '' || route == '/' ? 'home' : route;
      }
    });
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
