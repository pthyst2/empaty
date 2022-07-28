import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { SeoService } from 'src/app/services/utilities/seo.service';
@Component({
  selector: 'page-error-not-found',
  templateUrl: './page-error-not-found.component.html',
  styleUrls: ['./page-error-not-found.component.sass'],
})
export class PageErrorNotFoundComponent implements OnInit {
  faHome = faHome;
  title = 'Page Not Found';
  description = 'The page you looking for is broken or not existed.';
  btn = {
    label: 'Go to homepage',
  };
  constructor(private router: Router, private seo: SeoService) {}
  ngOnInit(): void {
    this.setSEO();
  }
  setSEO() {
    this.seo.setTitle('Error: Page Not Found');
  }
  goHome() {
    this.router.navigate(['home']);
  }
}
