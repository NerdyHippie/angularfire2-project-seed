import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from "@angular/router";
import { AngularFire } from 'angularfire2';
import { AlertService } from "../../global/_services/alert.service";
import * as firebase from 'firebase';


export interface NewPasswordModel {
	password: string
}

@Component({
    moduleId: module.id,
    selector: 'email-action',
    templateUrl: 'email-action.component.html'
})
export class EmailActionComponent implements OnInit {
		auth: any;
		mode:string;
		actionCode:string;
		apiKey:string;
		accountEmail:string;
		model:NewPasswordModel = {password:''};
		urlParams: any;
		
		
    constructor(
    	private af:AngularFire,
			private activatedRoute:ActivatedRoute,
			private alertService:AlertService,
			private router:Router
		) { }

    ngOnInit():void {
    	this.auth = firebase.auth();
    	
			this.activatedRoute.queryParams.subscribe((params: Params) => {
				this.urlParams = params;
				if (params['mode']) this.mode = params['mode'];
				if (params['oobCode']) this.actionCode = params['oobCode'];
				if (params['apiKey']) this.apiKey = params['apiKey'];
				
				this.handleAction();
			});
		}
		
		handleAction():void {
			switch (this.mode) {
				case 'resetPassword':
					this.handleResetPassword();  // Display reset password handler and UI.
					break;
				case 'recoverEmail':
					this.handleRecoverEmail();  // Display email recovery handler and UI.
					break;
				case 'verifyEmail':
					this.handleVerifyEmail();  // Display email verification handler and UI.
					break;
				default:
				// Error: invalid mode.
			}
		}
	
		handleResetPassword() {
    	this.auth.verifyPasswordResetCode(this.actionCode)
				.then((email:any) => this.accountEmail = email)
				.catch((error:any) => {
					this.alertService.error(error.message);
					console.error('Warning: Error in verifyPasswordResetCode',error);
				});
		}
		
		doPasswordReset(newPassword:string) {
			// Save the new password.
			this.auth.confirmPasswordReset(this.actionCode, newPassword)
				.then((resp:any) => this.auth.signInWithEmailAndPassword(this.accountEmail, newPassword)
						.then(this.router.navigate(['/'])))
				.catch((error:any) => {
					this.alertService.error(error.message);
					console.error('Warning: Error in confirmPasswordReset',error);
				});
				
		}
	
		handleRecoverEmail() {
    	
    	
			/*var restoredEmail = null;
			// Confirm the action code is valid.
			auth.checkActionCode(actionCode).then(function(info) {
				// Get the restored email address.
				restoredEmail = info['data']['email'];
				
				// Revert to the old email.
				return auth.applyActionCode(actionCode);
			}).then(function() {
				// Account email reverted to restoredEmail
				
				// TODO: Display a confirmation message to the user.
				
				// You might also want to give the user the option to reset their password
				// in case the account was compromised:
				auth.sendPasswordResetEmail(restoredEmail).then(function() {
					// Password reset confirmation sent. Ask user to check their email.
				}).catch(function(error) {
					// Error encountered while sending password reset code.
				});
			}).catch(function(error) {
				// Invalid code.
			});*/
		}
	
		handleVerifyEmail() {
			/*// Try to apply the email verification code.
			auth.applyActionCode(actionCode).then(function(resp) {
				// Email address has been verified.
				
				// TODO: Display a confirmation message to the user.
				// You could also provide the user with a link back to the app.
			}).catch(function(error) {
				// Code is invalid or expired. Ask the user to verify their email address
				// again.
			});*/
		}
    
}
