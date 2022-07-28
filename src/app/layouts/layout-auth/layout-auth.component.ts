import { Component, OnInit } from '@angular/core';
import { solidNavFooterAuth } from 'src/app/data/solids/solidNavFooterAuth';

@Component({
  selector: 'layout-auth',
  templateUrl: './layout-auth.component.html',
  styleUrls: ['./layout-auth.component.sass'],
})
export class LayoutAuthComponent implements OnInit {
  footerNavs = solidNavFooterAuth;
  constructor() {}

  ngOnInit(): void {}
}
