import { Component, OnInit } from '@angular/core';
//#region Solids
import { solidNavFooterHome } from 'src/app/data/solids/solidNavFooterHome';
import { solidAppInfo } from 'src/app/data/solids/solidAppInfo';
//#endregion

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTwitter,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'partial-footer-home',
  templateUrl: './partial-footer-home.component.html',
  styleUrls: ['./partial-footer-home.component.sass'],
})
export class PartialFooterHomeComponent implements OnInit {
  icons = {
    instagram: faInstagram,
    twitter: faTwitter,
    facebook: faFacebookSquare,
  };

  buttons = {
    classes:
      'px-8 py-3 bg-transparent text-white border border-white rounded hover:bg-main ',
  };

  nav = solidNavFooterHome;
  appInfo = solidAppInfo;

  constructor() {}

  ngOnInit(): void {}
}
