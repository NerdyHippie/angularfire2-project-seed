import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
		
    constructor(private router: Router,private af: AngularFire) {	}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.af.auth.map((auth) => {
					if (!auth) {
						let queryParams:any= {};
						if (state.url != '/') {
							queryParams.returnUrl = state.url
						}
						this.router.navigate(['/login'], { queryParams: queryParams});
						return false;
					}
					return true;
				}).take(1);
    }
}
