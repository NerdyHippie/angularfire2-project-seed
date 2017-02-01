import { Injectable } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { AngularFire,AngularFireAuth,AuthProviders,AuthMethods } from 'angularfire2';
import { AlertService } from './alert.service';
import { UserService } from './user.service';
import { Logger } from "./logger.service";

import * as firebase from 'firebase';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
		auth:AngularFireAuth;  // Store the AngularFire auth in a service variable so that we can use it in components, etc.
		loggedIn:Boolean = null;
	
		constructor(
			private af:AngularFire,
			private router:Router,
			private activatedRoute: ActivatedRoute,
			private usrSvc:UserService,
			private alertService:AlertService,
			private logger:Logger
		) {
    	this.auth = af.auth;
    	
			af.auth.subscribe((authData) => {
				logger.log('authData in authenticationService',authData);
				if (authData) {
					this.loggedIn = true;
					this.handleAuthSuccess(authData);
				} else {
					if (window.location.pathname !== '/emailAction') {
						this.loggedIn = false;
						logger.log('nav to logout');
						let returnUrl:string = this.router.routerState.snapshot.url;
						this.router.navigate(['/logout'], { queryParams: { returnUrl: returnUrl }});
					}
				}
			})
    };
	
		loginWithEmail(username:string,password:string) {
			return this.af.auth.login({email:username,password:password},
				{
					provider: AuthProviders.Password,
					method: AuthMethods.Password,
				});
		}
		
		loginWithFacebook() {
			return this.af.auth.login(
				{
					provider: AuthProviders.Facebook,
					method: AuthMethods.Popup,
				});
		}
		loginWithGoogle() {
			return this.af.auth.login(
				{
					provider: AuthProviders.Google,
					method: AuthMethods.Popup,
				});
		}
		loginWithTwitter() {
			return this.af.auth.login(
				{
					provider: AuthProviders.Twitter,
					method: AuthMethods.Popup,
				});
		}
		loginWithGithub() {
			return this.af.auth.login(
				{
					provider: AuthProviders.Github,
					method: AuthMethods.Popup,
				});
		}
		
		handleAuthSuccess(authData:any) {
			this.logger.log('firing handleAuthSuccess',authData);
			
			this.usrSvc.setUserAccount(authData);
			this.usrSvc.loadCurrentUser(authData);
		}
		
		logout() {
			this.af.auth.logout();
			return this.af.auth;
		}
	
		requestReset(email:string): any{
			return firebase.auth().sendPasswordResetEmail(email);
		}
}
