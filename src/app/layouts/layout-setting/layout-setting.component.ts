import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-setting',
  templateUrl: './layout-setting.component.html',
  styleUrls: ['./layout-setting.component.sass'],
})
export class LayoutSettingComponent implements OnInit {
  user: any;
  route = 'profile';
  constructor() {}

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    let localUser: any = localStorage.getItem('user');
    this.user = JSON.parse(localUser);
  }
}
