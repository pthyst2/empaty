import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/data/auth.service';
@Component({
  selector: 'layout-setting',
  templateUrl: './layout-setting.component.html',
  styleUrls: ['./layout-setting.component.sass'],
})
export class LayoutSettingComponent implements OnInit, OnDestroy {
  user: any;
  subs = new Subscription();
  @Input() route = 'profile';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getUser();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  getUser() {
    this.subs.add(
      this.authService.getUserInfo().subscribe({
        next: (res: any) => {
          this.user = res.data.userInfo;
        },
        error: (err) => {
          console.error(err);
        },
      })
    );
  }
}
