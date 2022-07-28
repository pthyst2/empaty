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
  logoUrl = environment.imageUrls.logos + 'logo-empaty.svg';
  @Input() linkActive: any;
  @Input() user: any;
  nav = [
    {
      label: 'Spaces',
      icon: faCube,
      route: 'home',
      active: false,
    },
    {
      label: 'Collaborators',
      icon: faPeopleGroup,
      route: 'collaborators',
      active: false,
    },
    {
      label: 'Public Spaces',
      icon: faLink,
      route: 'public-spaces',
      active: false,
    },
    {
      label: 'Statistics',
      icon: faChartSimple,
      route: 'statistics',
      active: false,
    },
  ];

  fixedUserAttributes = {
    bottomNegative: 'full',
    right: '0',
    rounded: true,
  };
  constructor(private aroute: ActivatedRoute) {}

  ngOnInit(): void {}
}
