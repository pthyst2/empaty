import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'partial-sidebar-setting',
  templateUrl: './partial-sidebar-setting.component.html',
  styleUrls: ['./partial-sidebar-setting.component.sass'],
})
export class PartialSidebarSettingComponent implements OnInit {
  faDown = faCaretDown;
  faUp = faCaretUp;
  @Input() user: any;
  @Input() route: any = 'profile';
  menu: any = [
    {
      icon: 'account',
      label: 'account',
      show: false,
      active: false,
      items: [
        {
          icon: 'manage',
          label: 'manage',
          active: false,
          route: '/member/setting/manage',
        },
        {
          icon: 'billing',
          label: 'billing',
          active: false,
          route: '/member/setting/billing',
        },
        {
          icon: 'user-octagon',
          label: 'roles',
          active: false,
          route: '/member/setting/roles',
        },
      ],
    },
  ];
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.activeItem();
  }
  activeItem() {
    for (let group of this.menu) {
      if (group.show != undefined) {
        for (let item of group.items) {
          if (item.route == this.route) {
            item.active = true;
            group.show = true;
            break;
          }
        }
      } else {
        if (group.route == this.route) {
          group.active = true;
          break;
        }
      }
    }
  }
  toggle(group: any) {
    group.show = group.show != undefined ? !group.show : undefined;
  }
  goPage(route: string) {
    this.router.navigate([route]);
  }
}
