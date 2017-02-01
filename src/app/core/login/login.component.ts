import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService, Logger } from '../../global/_services/index';
import { Subscription} from "rxjs";

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model:any = {};
    loading:Boolean = false;
    returnUrl: string;
    loginSubscription$: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
				private logger: Logger
		) { }

    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.loginSubscription$ = this.authenticationService.auth.subscribe(this.handleLoginSuccess.bind(this),this.handleLoginError.bind(this));
    }
    
    ngOnDestroy() {
    	this.loginSubscription$.unsubscribe();
		}

    loginWithEmail() {
        this.loading = true;
        this.authenticationService.loginWithEmail(this.model.username, this.model.password)
					.catch((authError:any) => {
						this.loading = false;
						
						this.alertService.error(authError);
						this.logger.error('Warning: Error authenticating user',authError);
        });
    }
    
    loginWithFacebook() {
			this.loading = true;
			this.authenticationService.loginWithFacebook();
		}
		loginWithGoogle() {
			this.loading = true;
			this.authenticationService.loginWithGoogle();
		}
		loginWithTwitter() {
			this.loading = true;
			this.authenticationService.loginWithTwitter();
		}
		loginWithGithub() {
			this.loading = true;
			this.authenticationService.loginWithGithub();
		}
		
		private handleLoginSuccess(data:any) {
    	this.router.navigate([this.returnUrl]);
			this.loading = false;
		}
		private handleLoginError(error:any) {
    	this.logger.error('login error', error);
			this.loading = false;
			this.alertService.error(error);
		}
}
