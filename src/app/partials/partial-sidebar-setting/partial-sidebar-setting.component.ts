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
  @Input() route: any = 'manage';
  menu: any = [
    {
      icon: 'account',
      label: 'Account',
      show: false,
      active: false,
      items: [
        {
          icon: 'manage',
          label: 'Manage',
          active: false,
          route: 'manage',
        },
        {
          icon: 'billing',
          label: 'Billing',
          active: false,
          route: 'billing',
        },
        {
          icon: 'user-octagon',
          label: 'Roles',
          active: false,
          route: 'roles',
        },
      ],
    },
  ];
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.activeItem();
    console.log('user: ', this.user);
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
}
