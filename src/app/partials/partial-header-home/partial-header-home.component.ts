import { Component, OnInit, Input, HostListener } from '@angular/core';
import {
  faBars,
  faTimes,
  faCirclePlay,
  faUser,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { solidLanguages } from 'src/app/data/solids/solidLanguages';
import { Router } from '@angular/router';
@Component({
  selector: 'partial-header-home',
  templateUrl: './partial-header-home.component.html',
  styleUrls: ['./partial-header-home.component.sass'],
})
export class PartialHeaderHomeComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;
  faCirclePlay = faCirclePlay;
  faUser = faUser;
  faCaretDown = faCaretDown;

  @Input() user: any;
  @Input() navs: any = [];
  @Input() logoUrl: string = '';
  btnExperience = {
    label: 'Experience',
  };

  btnRegister = {
    label: 'Register',
    classes:
      'px-4 py-3 rounded border border-white bg-transparent text-white hover:bg-main hover:text-white hover:border-main',
  };

  transparent: boolean = true;
  menuExpand: boolean = false;

  fixedItems = {
    languages: {
      bottomNegative: 'full',
      right: '0',
      rounded: true,
    },
    user: {
      bottomNegative: 'full',
      right: '0',
      rounded: true,
    },
  };

  currentLanguage = solidLanguages[0];

  constructor(private router: Router) {}

  ngOnInit(): void {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.transparent = window.scrollY == 0;
  }

  toggleMenu() {
    this.menuExpand = !this.menuExpand;
  }

  goRegister() {
    this.router.navigate(['/auth/register']);
  }
}
