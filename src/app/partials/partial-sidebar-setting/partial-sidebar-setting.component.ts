import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'partial-sidebar-setting',
  templateUrl: './partial-sidebar-setting.component.html',
  styleUrls: ['./partial-sidebar-setting.component.sass'],
})
export class PartialSidebarSettingComponent implements OnInit {
  @Input() user: any;
  @Input() route: any;
  menu: any = [
    {
      icon: '',
      label: '',
      show: false,
      active: false,
      items: [
        {
          icon: '',
          label: 'Manage',
          active: false,
          route: 'manage',
        },
        {
          icon: '',
          label: 'Billing',
          active: false,
          route: 'billing',
        },
        {
          icon: '',
          label: 'Roles',
          active: false,
          route: 'roles',
        },
      ],
    },
    {
      icon: '',
      label: '',
      active: false,
      route: '',
    },
  ];
  constructor(private router: Router) {}
  ngOnInit(): void {}

  activeItem() {
    for (let group of this.menu) {
      if (group.show != undefined) {
        for (let item of group.items) {
          if (item.route == this.route) {
            item.active = true;
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
