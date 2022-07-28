import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FixedItemBaseComponent } from '../fixed-item-base/fixed-item-base.component';
import { AuthService } from 'src/app/services/data/auth.service';
//#region Icons
import {
  faArrowRightFromBracket,
  faHouse,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
//#endregion

@Component({
  selector: 'fixed-item-user',
  templateUrl: './fixed-item-user.component.html',
  styleUrls: ['./fixed-item-user.component.sass'],
})
export class FixedItemUserComponent extends FixedItemBaseComponent {
  faLogout = faArrowRightFromBracket;
  faHouse = faHouse;
  faGear = faGear;
  @Input() user: any;
  constructor(private authService: AuthService, private router: Router) {
    super();
  }
  logout() {
    this.authService.clearStorage();
    this.router.navigate(['home']);
  }
}
