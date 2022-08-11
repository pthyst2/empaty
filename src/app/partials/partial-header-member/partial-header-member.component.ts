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
@Component({
  selector: 'partial-header-member',
  templateUrl: './partial-header-member.component.html',
  styleUrls: ['./partial-header-member.component.sass'],
})
export class PartialHeaderMemberComponent implements OnInit {
  faUser = faUser;
  faCaretDown = faCaretDown;
  logo = environment.imageUrls.logos + 'logo-empaty.svg';
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
  showFixed = false;
  fixedUser = {
    bottomNegative: 'full',
    right: '0',
    rounded: true,
  };
  constructor(private aroute: ActivatedRoute) {}

  ngOnInit(): void {}
}
