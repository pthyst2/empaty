import { Component, OnInit } from '@angular/core';
import { solidAppInfo } from 'src/app/data/solids/solidAppInfo';
import { solidNavHeaderHome } from 'src/app/data/solids/solidNavHeaderHome';
@Component({
  selector: 'layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.sass'],
})
export class LayoutHomeComponent implements OnInit {
  user: any;
  navs: any = solidNavHeaderHome;
  logoUrl: string = solidAppInfo.logoUrl;

  constructor() {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    let localUser: any = localStorage.getItem('user');
    let user = JSON.parse(localUser);
    if (user) {
      this.user = user;
    }
  }
}
