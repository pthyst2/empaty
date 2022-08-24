import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import {
  faCube,
  faPeopleGroup,
  faLink,
  faChartSimple,
  faUser,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { solidLanguages } from 'src/app/data/solids/solidLanguages';
import { solidAppInfo } from 'src/app/data/solids/solidAppInfo';
@Component({
  selector: 'partial-header-member',
  templateUrl: './partial-header-member.component.html',
  styleUrls: ['./partial-header-member.component.sass'],
})
export class PartialHeaderMemberComponent implements OnInit {
  faUser = faUser;
  faCaretDown = faCaretDown;
  logo = solidAppInfo.logoUrl;
  @Input() linkActive: any;
  @Input() user: any;
  nav = [
    {
      svg: '3d-cube-scan-white',
      route: 'home',
      active: false,
    },
    {
      svg: 'people-white',
      route: 'collaborators',
      active: false,
    },
    {
      svg: 'global-white',
      route: 'public-spaces',
      active: false,
    },
    {
      svg: 'chart-white',
      route: 'statistics',
      active: false,
    },
  ];
  showLanguages = false;
  fixedLangs = { bottomNegative: 'full', right: '0', rounded: true };
  showFixed = false;
  fixedUser = {
    bottomNegative: 'full',
    right: '0',
    rounded: true,
  };
  iconLang: any;
  constructor(private aroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getLangIcon();
  }
  getLangIcon() {
    let localLang: any = localStorage.getItem('lang');
    if (!localLang) {
      localLang = 'en';
    }
    for (let lang of solidLanguages) {
      if (lang.value == localLang) {
        this.iconLang = lang.icon;
        break;
      }
    }
  }
}
