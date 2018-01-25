import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private af: AngularFireAuth) {	}
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.af.authState.map((auth) => {
      if (!auth) {
        const queryParams: any = {};
        if (state.url !== '/') {
          queryParams.returnUrl = state.url;
        }
        this.router.navigate(['/login'], {queryParams: queryParams});
        return false;
      }
      return true;
    }).take(1);
  }
}
