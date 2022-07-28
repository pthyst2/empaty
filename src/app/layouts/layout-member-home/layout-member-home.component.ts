import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'layout-member-home',
  templateUrl: './layout-member-home.component.html',
  styleUrls: ['./layout-member-home.component.sass'],
})
export class LayoutMemberHomeComponent implements OnInit {
  linkActive: any;
  user: any;
  constructor(private router: Router) {
    this.catchUrl();
  }
  ngOnInit(): void {
    this.getUser();
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
    let localUser: any = localStorage.getItem('user');
    this.user = JSON.parse(localUser);
  }
}
