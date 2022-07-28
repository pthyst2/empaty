import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { SeoService } from 'src/app/services/utilities/seo.service';
@Component({
  selector: 'page-error-authentication',
  templateUrl: './page-error-authentication.component.html',
  styleUrls: ['./page-error-authentication.component.sass'],
})
export class PageErrorAuthenticationComponent implements OnInit {
  faUser = faUser;
  title = 'Authentication Error';
  description = 'You need to logged in or granted permission to continue.';
  btn = {
    label: 'Login',
  };
  constructor(private router: Router, private seo: SeoService) {}
  ngOnInit(): void {
    this.setSEO();
  }
  setSEO() {
    this.seo.setTitle('Error: Authentication');
  }
  goLogin() {
    this.router.navigate(['auth/login']);
  }
}
