import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../data/auth.service';
@Injectable()
export class GuardMember implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let loggedIn = this.authService.isLoggedIn();
    if (!loggedIn) {
      this.router.navigate(['errors/authentication']);
      return false;
    } else {
      return true;
    }
  }
}
